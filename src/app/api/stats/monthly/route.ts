import { NextRequest } from "next/server";
import connectDB from "@/lib/db";
import Visitor from "@/models/visitor.model";
import Visit from "@/models/visit.model";
import { handleOptions, corsResponse } from "@/lib/cors";

type RateLimitEntry = {
  count: number;
  start: number;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30;
const rateLimitStore = new Map<string, RateLimitEntry>();

export async function OPTIONS(request: NextRequest) {
  return handleOptions(request);
}

type MonthlyBucket = {
  _id: {
    year: number;
    month: number;
  };
  count: number;
};

function normalizeMonthly(buckets: MonthlyBucket[]) {
  return [...buckets].reverse().map((item) => {
    const monthIndex = item._id.month - 1;
    const date = new Date(item._id.year, monthIndex, 1);
    const label = date.toLocaleString("en-US", { month: "short" });

    return {
      key: `${label} ${item._id.year}`,
      month: label,
      year: item._id.year,
      count: item.count,
    };
  });
}

export async function GET(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const current = rateLimitStore.get(ip);

    if (!current || now - current.start > WINDOW_MS) {
      rateLimitStore.set(ip, { count: 1, start: now });
    } else if (current.count >= MAX_REQUESTS) {
      return corsResponse(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        request,
        429,
      );
    } else {
      current.count += 1;
      rateLimitStore.set(ip, current);
    }

    await connectDB();

    const visitorBuckets = await Visitor.aggregate<MonthlyBucket>([
      {
        $group: {
          _id: {
            year: { $year: "$visitedAt" },
            month: { $month: "$visitedAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": -1, "_id.month": -1 },
      },
      {
        $limit: 12,
      },
    ]);

    const visitBuckets = await Visit.aggregate<MonthlyBucket>([
      {
        $group: {
          _id: {
            year: { $year: "$visitedAt" },
            month: { $month: "$visitedAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": -1, "_id.month": -1 },
      },
      {
        $limit: 12,
      },
    ]);

    const visitors = normalizeMonthly(visitorBuckets);
    const profileViews = normalizeMonthly(visitBuckets);

    return corsResponse(
      {
        success: true,
        data: {
          visitors,
          profileViews,
        },
        message: "Monthly stats fetched successfully",
      },
      request,
      200,
    );
  } catch (error) {
    return corsResponse(
      {
        success: false,
        error: "Failed to fetch monthly stats",
      },
      request,
      500,
    );
  }
}
