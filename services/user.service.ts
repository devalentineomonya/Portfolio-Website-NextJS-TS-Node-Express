import db from "@/drizzle/db";
import { TUsersInsert, TUsersSelect, userTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const getUserByEmailService = async (
  email: string
): Promise<TUsersSelect | undefined> => {
  return await db.query.userTable.findFirst({
    where: eq(userTable.email, email),
  });
};

export const insertUserService = async (
  userPayLoad: TUsersInsert
): Promise<TUsersSelect | undefined> => {
  const rows = await db.insert(userTable).values(userPayLoad).returning();
  return rows[0];
};
