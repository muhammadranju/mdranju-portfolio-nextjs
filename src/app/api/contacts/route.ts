import connectDB from "@/lib/db";
import Contact from "@/models/contact.model";
import { type NextRequest, NextResponse } from "next/server";
import { phone as validNumber } from "phone";
import * as EmailValidator from "email-validator";

export async function GET() {
  try {
    await connectDB();
    const contact = await Contact.find().sort({ createdAt: -1 }).exec();
    console.log(contact);

    return NextResponse.json(
      {
        status: 200,
        success: true,
        count: contact.length,
        message: "Contact fetched successfully",
        data: contact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get contact error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstName, lastName, phone, email, message } = await req.json();
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const validPhone = validNumber(phone);
    console.log(phone);
    if (!validPhone.isValid) {
      return NextResponse.json(
        { error: "Invalid phone number, add your country code." },
        { status: 400 }
      );
    }

    if (!EmailValidator.validate(email)) {
      return NextResponse.json(
        { error: "Invalid email, please try again." },
        {
          status: 400,
        }
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
    return NextResponse.json(
      {
        success: true,
        massage: "Message sent successfully! I'll get back to you soon.",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create contact error:", error);
    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
