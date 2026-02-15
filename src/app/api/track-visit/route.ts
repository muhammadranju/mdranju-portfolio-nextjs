import Stats from "@/models/stats.model"; // Adjust path as needed
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Visitor from "@/models/visitor.model";

import { handleOptions, corsResponse } from "@/lib/cors";

export async function OPTIONS(request: NextRequest) {
  return handleOptions(request); // ✅ Handles preflight CORS request
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Create a unique hash for the visitor (IP + User-Agent)
    const hash = crypto
      .createHash("sha256")
      .update(`${ip}-${userAgent}`)
      .digest("hex");

    // Check if visitor already exists
    const existingVisitor = await Visitor.findOne({ hash });

    let totalVisitors = 0;

    if (!existingVisitor) {
      // New unique visitor: insert record and increment counter
      await Visitor.create({ hash, ip, userAgent });

      // Atomic increment on stats
      const stats = await Stats.findOneAndUpdate(
        {},
        { $inc: { totalVisitors: 1, totalVisits: 1 } },
        { upsert: true, new: true }
      );

      totalVisitors = stats.totalVisitors;
    } else {
      // Existing visitor: just increment total visits (optional, for analytics)
      await Stats.findOneAndUpdate(
        {},
        { $inc: { totalVisits: 1 } },
        { upsert: true, new: true }
      );

      // Fetch current total visitors
      const stats = await Stats.findOne();
      totalVisitors = stats?.totalVisitors || 0;
    }

    return corsResponse(
      {
        success: true,
        totalVisitors,
        message: existingVisitor
          ? "Visit tracked (returning visitor)"
          : "New visitor tracked",
      },
      request,
      200
    );
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return corsResponse(
      { success: false, error: "Failed to track visit" },
      request,
      500
    );
  }
}

// Optional: POST version if you prefer body-based tracking (e.g., for client-side)
export async function POST(request: NextRequest) {
  await connectDB();
  // Similar logic, but read body if needed (though headers are sufficient)
  return GET(request); // Reuse GET logic for simplicity
}
