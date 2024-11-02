"use server"
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from "./schema";
import { sql } from "@vercel/postgres";

export async function connectToDB() {
    return await drizzle(sql, { schema, logger: true });
}

const db = await connectToDB();

export { db };
