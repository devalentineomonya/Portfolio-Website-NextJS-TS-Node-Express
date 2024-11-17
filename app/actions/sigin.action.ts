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
    await signIn("credentials", {
      email,
      password,
    });
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
            message: "An unexpected error occurred. from catch",
          };
      }
    }

    console.log("An error from outer scope", error);
    return {
      success: false,
      message: "An unexpected error occurred. from outer scope",
    };
  }
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/" });
}
