import { handleOptions, corsResponse } from "@/lib/cors";
import connectDB from "@/lib/db";
import Project from "@/models/project.model";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS(request: NextRequest) {
  return handleOptions(request);
}

type RouteParams = {
  id: string;
};

type RouteContext = {
  params: Promise<RouteParams>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    await connectDB();
    const { id } = await context.params;
    const project = await Project.findOne({ slug: id });

    if (!project) {
      return corsResponse({ error: "Project not found" }, request, 404);
    }

    return corsResponse(
      {
        success: true,
        data: project,
        message: "Project fetched successfully",
      },
      request,
    );
  } catch (error) {
    return corsResponse(
      { error: error || "Failed to fetch project" },
      request,
      500,
    );
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    await connectDB();

    let body;
    try {
      body = await request.json();
    } catch {
      return corsResponse(
        { success: false, message: "Invalid or empty JSON body" },
        request,
        400,
      );
    }

    const {
      title,
      details,
      longDetails,
      sourceCode,
      backendSourceCode,
      liveLink,
      image,
      category,
      tags,
      author,
      avatar,
    } = body;

    const { id } = await context.params;

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        {
          status: 404,
        },
      );
    }

    project.title = title ?? project.title;
    project.details = details ?? project.details;
    project.longDetails = longDetails ?? project.longDetails;
    project.category = category ?? project.category;
    project.author = author ?? project.author;
    project.backendSourceCode = backendSourceCode ?? project.backendSourceCode;
    project.liveLink = liveLink ?? project.liveLink;
    project.sourceCode = sourceCode ?? project.sourceCode;
    project.image = image ?? project.image;
    project.avatar = avatar ?? project.avatar;

    if (tags) {
      if (typeof tags === "string") {
        project.tags = tags.split(",").map((tag) => tag.trim());
      } else if (Array.isArray(tags)) {
        project.tags = tags;
      }
    }

    await project.save();

    return corsResponse(
      {
        success: true,
        message: "Project updated successfully",
        data: project,
      },
      request,
      200,
    );
  } catch (error) {
    return corsResponse(
      { success: false, message: "Failed to update project", error },
      request,
      500,
    );
  }
}
