import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: number | string; 
    fullName: string;
    isAdmin: boolean;
    email: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number | string;
    fullName: string;
    isAdmin: boolean;
    email: string;
  }
}
