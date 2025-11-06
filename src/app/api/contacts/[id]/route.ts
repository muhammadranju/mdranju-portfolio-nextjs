import connectDB from "@/lib/db";
import Contact from "@/models/contact.model";
import { NextRequest, NextResponse } from "next/server";
import { handleOptions, corsResponse } from "@/lib/cors";

export async function OPTIONS(request: NextRequest) {
  return handleOptions(request); // ✅ Handles preflight CORS request
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const contact = await Contact.findById(params.id);
    if (!contact) {
      return corsResponse({ error: "Contact not found" }, request, 404);
    }

    await Contact.deleteOne({ _id: params.id });
    return corsResponse({ message: "Contact deleted" }, request, 200);
  } catch (error) {
    console.error("Delete contact error:", error);
    return corsResponse({ error: "Failed to delete contact" }, request, 500);
  }
}
