import connectDB from "@/lib/db";
import Project from "@/models/project.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const project = await Project.findOne({ slug: params.id });
    // const project = await Project.findById(params.id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        success: true,
        data: project,
        message: "Project fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error || "Failed to fetch project" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    // ✅ Safely parse JSON body
    let body;
    try {
      body = await request.json();
    } catch (err) {
      return NextResponse.json(
        { success: false, message: "Invalid or empty JSON body" },
        { status: 400 }
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

    // ✅ Check if ID exists
    const project = await Project.findById(params.id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    // ✅ Update fields dynamically
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

    // ✅ Safe tags handling
    if (tags) {
      if (typeof tags === "string") {
        project.tags = tags.split(",").map((tag) => tag.trim());
      } else if (Array.isArray(tags)) {
        project.tags = tags;
      }
    }
    // ✅ Save the updated project
    await project.save();

    return NextResponse.json(
      {
        success: true,
        message: "Project updated successfully",
        data: project,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update project", error },
      { status: 500 }
    );
  }
}
