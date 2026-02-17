import { handleOptions, corsResponse } from "@/lib/cors";
import connectDB from "@/lib/db";
import Project from "@/models/project.model";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS(request: NextRequest) {
  return handleOptions(request); // ✅ Handles preflight CORS request
}

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();
    const searchParams = req.nextUrl.searchParams;
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");

    const page = pageParam ? parseInt(pageParam, 10) : 0;
    const limit = limitParam ? parseInt(limitParam, 10) : 0;

    if (page > 0 && limit > 0) {
      const skip = (page - 1) * limit;

      const [projects, total] = await Promise.all([
        Project.find().sort({ createdAt: -1 }).skip(skip).limit(limit).exec(),
        Project.countDocuments().exec(),
      ]);

      const totalPages = Math.max(1, Math.ceil(total / limit));
      const hasMore = page < totalPages;

      return corsResponse(
        {
          status: 200,
          success: true,
          count: projects.length,
          total,
          totalPages,
          page,
          limit,
          hasMore,
          message: "Projects fetched successfully",
          project: projects,
        },
        req,
        200,
      );
    }

    const projects = await Project.find().sort({ createdAt: -1 }).exec();

    return corsResponse(
      {
        status: 200,
        success: true,
        count: projects?.length,
        total: projects?.length,
        totalPages: 1,
        page: 1,
        limit: projects?.length ?? 0,
        hasMore: false,
        message: "Projects fetched successfully",
        project: projects,
      },
      req,
      200,
    );
  } catch (error) {
    return corsResponse({ error: "Failed to fetch projects" }, req, 500);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const {
      title,
      details,
      longDetails,
      category,
      author,
      liveLink,
      sourceCode,
      backendSourceCode,
      image,
      avatar,
      tags,
    } = await req.json();
    if (!title || !details || !category || !author || !sourceCode || !image) {
      return corsResponse({ error: "Missing required fields" }, req, 400);
    }

    const spitesTags = tags?.split(", ").map((tag: string) => tag.trim());
    console.log(spitesTags);
    const project = new Project({
      title,
      details,
      longDetails,
      category,
      author,
      liveLink,
      sourceCode,
      backendSourceCode,
      image,
      avatar,
      tags: spitesTags,
    });
    await project.save();
    return corsResponse(project, req, 201);
  } catch (error) {
    return corsResponse({ error: "Failed to create project" }, req, 500);
  }
};
