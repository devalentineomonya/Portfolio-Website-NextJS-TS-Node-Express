import { loginSchema } from "@/lib/zod";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getUserByEmailService } from "@/services/user.service";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        const parsedCredentials = loginSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error(
            "Invalid credentials from config file:",
            parsedCredentials.error.errors
          );
          return null;
        }
        const user = await getUserByEmailService(credentials.email as string);

        if (!user) {
          console.log("Invalid credentials from nextAuth config");
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) {
          console.log("Invalid credentials");
          return null;
        }
        return {
          id: user.userId.toString(),
          fullName: `${user.firstName} ${user.lastName}`,
          isAdmin: user.isAdmin,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = auth?.user ? true : false;
      const { pathname } = nextUrl;
      if (pathname.startsWith("/admin/signin") && isLoggedIn) {
        return Response.redirect(new URL("/admin/dashboard", nextUrl));
      }
      return isLoggedIn;
    },

    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string | number;
        token.fullName = user.fullName;
        token.isAdmin = user.isAdmin;
        token.email = user.email as string;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string
      session.user.fullName = token.fullName;
      session.user.isAdmin = token.isAdmin;
      session.user.email = token.email as string;
      return session;
    },
  },
  pages: {
    signIn: "/admin/signin",
  },
});
