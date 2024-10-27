// import { Schema, model, models, Document } from 'mongodb';

import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("userTable", {
  userId:serial("user_id"),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull().unique(),
  isAdmin: boolean("is_admin").notNull().default(false),
  password: varchar("password").notNull(),
  image:varchar("image"),
});

export type TUsersSelect = typeof userTable.$inferSelect;
export type TUsersInsert = typeof userTable.$inferInsert;
