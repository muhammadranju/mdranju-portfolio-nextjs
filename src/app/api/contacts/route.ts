import connectDB from "@/lib/db";
import Contact from "@/models/contact.model";
import { type NextRequest, NextResponse } from "next/server";
import { phone as validNumber } from "phone";
import * as EmailValidator from "email-validator";
import { handleOptions, corsResponse } from "@/lib/cors";

export async function OPTIONS(request: NextRequest) {
  return handleOptions(request); // ✅ Handles preflight CORS request
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const contact = await Contact.find().sort({ createdAt: -1 }).exec();
    console.log(contact);

    return corsResponse(
      {
        status: 200,
        success: true,
        count: contact.length,
        message: "Contact fetched successfully",
        data: contact,
      },
      request,
      200
    );
  } catch (error) {
    console.error("Get contact error:", error);
    return corsResponse({ error: "Failed to fetch contact" }, request, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstName, lastName, phone, email, message } = await req.json();
    if (!firstName || !lastName || !email || !message) {
      return corsResponse({ error: "Missing required fields" }, req, 400);
    }

    const validPhone = validNumber(phone);
    console.log(phone);
    if (!validPhone.isValid) {
      return corsResponse(
        { error: "Invalid phone number, add your country code." },
        req,
        400
      );
    }

    if (!EmailValidator.validate(email)) {
      return corsResponse(
        { error: "Invalid email, please try again." },
        req,
        400
      );
    }

    const contact = new Contact({
      firstName,
      lastName,
      phone: validPhone.phoneNumber,
      email,
      message,
      country: validPhone.countryIso2,
    });
    await contact.save();
    return corsResponse(
      {
        success: true,
        massage: "Message sent successfully! I'll get back to you soon.",
        data: contact,
      },
      req,
      201
    );
  } catch (error) {
    console.error("Create contact error:", error);
    return corsResponse({ error: "Failed to create contact" }, req, 500);
  }
}
