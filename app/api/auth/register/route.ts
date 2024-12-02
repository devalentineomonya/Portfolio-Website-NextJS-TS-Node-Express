import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

import {db}  from "@/drizzle/db";
import { TUserInsert, TUserSelect, userTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";


export const getUserByEmailService = async (
  email: string
): Promise<TUserSelect | undefined> => {
  return await db.query.userTable.findFirst({
    where: eq(userTable.email, email),
  });
};

export const insertUserService = async (
  userPayLoad: TUserInsert
): Promise<TUserSelect | undefined> => {
  const rows = await db.insert(userTable).values(userPayLoad).returning();
  return rows[0];
};

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

    const existingUser = await getUserByEmailService(email);
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    const newUser = await insertUserService({
      firstName,
      lastName,
      email,
      image,
      password: hashedPassword,
    });
    if (!newUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to insert user please try  again",
        },
        { status: 400 }
      );
    }

    const { password: userPassword, ...safeUser } = newUser;

    return NextResponse.json(
      { success: true, user: safeUser },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}
