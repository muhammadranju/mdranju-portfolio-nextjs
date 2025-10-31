import Project from "@/models/project.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const projects = await Project.find().find().sort({ createdAt: -1 }).exec();
    return NextResponse.json(
      {
        status: 200,
        success: true,
        count: projects?.length,
        message: "Projects fetched successfully",
        project: projects,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
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
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

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
      tags,
    });
    await project.save();
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
};
