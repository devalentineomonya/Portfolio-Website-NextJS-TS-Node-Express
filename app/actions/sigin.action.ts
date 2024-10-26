"use server";

import { signIn, signOut } from "@/config/nextAuth";
import { AuthError } from "next-auth";

export async function handleCredentialsSignin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });


    if (result?.error) {
      return {
        success: false,
        message: result.error, 
      };
    }

    if (!result?.user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    return {
      success: true,
      user: result.user, 
    };
  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occurred.",
    };
  }
}
