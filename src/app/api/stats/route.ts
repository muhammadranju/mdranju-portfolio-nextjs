import { NextRequest, NextResponse } from "next/server";
import Stats from "@/models/stats.model";
import Visitor from "@/models/visitor.model"; // Import Visitor model for aggregation
import connectDB from "@/lib/db";
import { handleOptions, corsResponse } from "@/lib/cors";

export async function OPTIONS(request: NextRequest) {
  return handleOptions(request); // ✅ Handles preflight CORS request
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const stats = await Stats.findOne();

    // Aggregate monthly unique visitors (one per visitor per month, but since hash is unique overall, count distinct per month)
    const monthlyStats = await Visitor.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$visitedAt" },
            month: { $month: "$visitedAt" },
          },
          count: { $sum: 1 }, // Count unique visitors per month (since each hash is unique)
        },
      },
      {
        $sort: { "_id.year": -1, "_id.month": -1 }, // Most recent first
      },
      {
        $limit: 12, // Limit to last 12 months for performance
      },
      {
        $project: {
          month: {
            $concat: [
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          count: 1,
          _id: 0,
        },
      },
    ]);

    // Format for easy reading (e.g., "10/2024": 150)
    const monthlyData = monthlyStats.reduce((acc, item) => {
      acc[item.month] = item.count;
      return acc;
    }, {} as Record<string, number>);

    return corsResponse(
      {
        success: true,
        data: {
          totalVisitors: stats?.totalVisitors || 0,
          totalVisits: stats?.totalVisits || 0,
          monthlyVisitors: monthlyData, // e.g., { "10/2024": 150, "9/2024": 120, ... }
        },
        message: "Stats fetched successfully",
      },
      request,
      200
    );
  } catch (error) {
    console.error("Error fetching stats:", error);
    return corsResponse(
      { success: false, error: "Failed to fetch stats" },
      request,
      500
    );
  }
}
