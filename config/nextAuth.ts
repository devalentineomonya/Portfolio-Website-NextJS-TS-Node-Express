import { loginSchema } from "@/lib/zod";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";
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
        let user = null;
      
        const parsedCredentials = loginSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error("Invalid credentials:", parsedCredentials.error.errors);
          return null;
        }
      
        await connectToDatabase();
        user = await User.findOne({ email: credentials.email });
        
        if (!user) {
          console.log("Invalid credentials");
          return null;
        }
      
        const isValid = await bcrypt.compare(credentials.password as string, user.password); 
      
        if (!isValid) {
          console.log("Invalid credentials");
          return null;
        }
      
        return user; 
      }
    }),
  ],
  callbacks: {
    async authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
  
      // Check if the user is already logged in
      if (pathname.startsWith("/admin/signin") && isLoggedIn) {
        return true; // Allow access since they're already logged in
      }
      
      // Add additional path checks as needed
      if (pathname.startsWith("/page2") && !auth?.user?.isAdmin) {
        return false; // Deny access for non-admin users
      }
  
      return !!auth; // Return whether the user is authenticated
    },
    jwt({ token, user, trigger, session }) {
      console.log("user",user)
      if (user) {
        token.id = user?._id as string;
        token.fullName = `${user?.firstName} ${user?.lastName}`; 
        token.isAdmin = user?.isAdmin;
      }
      if (trigger === "update" && session) {
        token = { ...token, ...session };
      }
      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.fullName = token.fullName as string
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  pages: {
    signIn: "/admin/signin",
  },
});
