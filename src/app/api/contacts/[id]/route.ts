import connectDB from "@/lib/db";
import Contact from "@/models/contact.model";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const contact = await Contact.findById(params.id);
    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    await Contact.deleteOne({ _id: params.id });
    return NextResponse.json({ message: "Contact deleted" }, { status: 200 });
  } catch (error) {
    console.error("Delete contact error:", error);
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
