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
    const projects = await Project.find().sort({ createdAt: -1 }).exec();

    return corsResponse(
      {
        status: 200,
        success: true,
        count: projects?.length,
        message: "Projects fetched successfully",
        project: projects,
      },
      req,
      200
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
