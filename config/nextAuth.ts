import { loginSchema } from "@/lib/zod";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/User";
import connectToDatabase  from "@/lib/mongodb";
import bcrypt from "bcryptjs";
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
        console.log(credentials)
        const parsedCredentials = loginSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error("Invalid credentials from config file:", parsedCredentials.error.errors);
          return null;
        }

        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });

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

        return user;
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
    token.id = user._id;
    token.fullName = `${user.firstName} ${user.lastName}`;
    token.isAdmin = user.isAdmin;
    token.email = user.email;
  }
  return token;
},
session({ session, token }) {
  session.user.id = token.id as string;
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
