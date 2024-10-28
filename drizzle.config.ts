import { defineConfig } from "drizzle-kit";
import "@/drizzle/config"
export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle/migrations",
  schema: "./drizzle/schema.ts",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
});
