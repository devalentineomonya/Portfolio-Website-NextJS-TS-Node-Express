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
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid credentials" };
        case "CallbackRouteError":
          return { success: false, message: "Invalid callback route" };
        default:
          return {
            success: false,
            message: "An unexpected error occurred.",
          };
      }
    }

    return {
      success: false,
      message: "An unexpected error occurred.",
    };
  }
}


export async function handleSignOut() {
  await signOut();
}