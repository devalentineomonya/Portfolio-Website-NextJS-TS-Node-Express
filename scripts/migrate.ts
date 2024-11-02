"use server"
import {migrate} from "drizzle-orm/vercel-postgres/migrator";
import { db }  from "@/drizzle/db";
async function main() {
    await migrate(db , {migrationsFolder: "./drizzle/migrations"});
}

main()