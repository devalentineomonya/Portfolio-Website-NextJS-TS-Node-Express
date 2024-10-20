import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";

const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  image: z.string().url("Invalid image URL"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const parsedData = userSchema.parse(reqBody);
    const { firstName, lastName, email, image, password } = parsedData;

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Email already exists",
      }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    const newUser = new User({
      firstName,
      lastName,
      email,
      image,
      password: hashedPassword,
    });
    await newUser.save();

    const userObject = newUser.toObject();
    delete userObject.password;

    return NextResponse.json({ success: true, user: userObject }, { status: 201 }); 
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: "Server error",
      error: error.message || error,
    }, { status: 500 });
  }
}
