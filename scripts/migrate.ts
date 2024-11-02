"use server"
import {migrate} from "drizzle-orm/vercel-postgres/migrator";
import connectToDB  from "@/drizzle/db";
export async function main() {
    const db = await connectToDB();
    await migrate(db , {migrationsFolder: "./drizzle/migrations"});
}

main()