import { NavUser } from "./NavUser";
import { auth } from "@/config/nextAuth";

export default async function NavUserWrapper() {
  const session = await auth();
  return <NavUser session={session} />;
}