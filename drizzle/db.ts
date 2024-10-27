import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {config} from "dotenv";
config({ path: ".env.local" }); 
import * as schema from "./schema"
const client = neon(process.env.DATABASE_URL as string);
const db = drizzle(client , {schema, logger:true});

export default db