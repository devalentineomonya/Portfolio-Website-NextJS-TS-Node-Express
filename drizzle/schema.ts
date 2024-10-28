// import { Schema, model, models, Document } from 'mongodb';

import { relations } from "drizzle-orm";
import { boolean, integer, jsonb, pgTable, serial, varchar } from "drizzle-orm/pg-core";

/* ===============================
USER TABLE AND RELATIONSHIPS
=================================*/

export const userTable = pgTable("userTable", {
  userId: serial("user_id").primaryKey().notNull().unique(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull().unique(),
  isAdmin: boolean("is_admin").notNull().default(false),
  password: varchar("password").notNull(),
  image: varchar("image"),
});

export const userRelations = relations(userTable, ({ many }) => ({
  projects: many(projectTable),
}));

/* ===============================
PROJECT TABLE AND RELATIONSHIPS
=================================*/
export const projectTable = pgTable("projectTable", {
  projectId: serial("project_id").primaryKey().notNull().unique(),
  createdBy: integer("created_by")
    .notNull()
    .references(() => userTable.userId, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  projectName: varchar("project_name").notNull(),
  projectDescription: varchar("project_description").notNull(),
  projectPreviewImage: varchar("project_preview_image").notNull(),
  projectPopupImage: varchar("project_popup_image").notNull(),
  projectLiveLink: varchar("project_live_link").notNull(),
  projectGithubLink: varchar("project_github_link").notNull(),
  projectTechnologies: jsonb("project_technologies").notNull(),
  projectEnvironment: varchar("project_environment").notNull(),
});

export const projectsRelations = relations(projectTable, ({ one }) => ({
  createdBy: one(userTable, {
    fields: [projectTable.createdBy],
    references: [userTable.userId],
  }),
}));

export type TProjectInsert = typeof projectTable.$inferInsert;
export type TProjectSelect = typeof projectTable.$inferSelect;
export type TUserSelect = typeof userTable.$inferSelect;
export type TUserInsert = typeof userTable.$inferInsert;
