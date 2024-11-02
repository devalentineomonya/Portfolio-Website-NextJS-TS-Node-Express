"use server"
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from "./schema";
// import "./config"
import {sql} from "@vercel/postgres"
const db = drizzle(sql, { schema, logger: true });

export default db;
