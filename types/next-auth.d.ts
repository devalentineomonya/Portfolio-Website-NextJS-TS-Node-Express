import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    _id: string;
    firstName: string;
    lastName: string;
    fullName:string;
    isAdmin: boolean;
  }
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id: string;
    firstName: string;
    lastName: string;
    fullName:string;
    isAdmin: boolean;
  }
}
