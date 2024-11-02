import connectToDB  from "@/drizzle/db";
import { TUserInsert, TUserSelect, userTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

const db = await connectToDB()
export const getUserByEmailService = async (
  email: string
): Promise<TUserSelect | undefined> => {
  return await db.query.userTable.findFirst({
    where: eq(userTable.email, email),
  });
};

export const insertUserService = async (
  userPayLoad: TUserInsert
): Promise<TUserSelect | undefined> => {
  const rows = await db.insert(userTable).values(userPayLoad).returning();
  return rows[0];
};
