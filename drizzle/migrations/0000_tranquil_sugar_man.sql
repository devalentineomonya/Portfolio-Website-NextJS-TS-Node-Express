CREATE TABLE IF NOT EXISTS "projectTable" (
	"project_id" serial PRIMARY KEY NOT NULL,
	"created_by" integer NOT NULL,
	"project_name" varchar NOT NULL,
	"project_description" varchar NOT NULL,
	"project_preview_image" varchar NOT NULL,
	"project_popup_image" varchar NOT NULL,
	"project_live_link" varchar NOT NULL,
	"project_github_link" varchar NOT NULL,
	"project_technologies" jsonb NOT NULL,
	"project_environment" varchar NOT NULL,
	CONSTRAINT "projectTable_project_id_unique" UNIQUE("project_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userTable" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"is_admin" boolean DEFAULT false NOT NULL,
	"password" varchar NOT NULL,
	"image" varchar,
	CONSTRAINT "userTable_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "userTable_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projectTable" ADD CONSTRAINT "projectTable_created_by_userTable_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."userTable"("user_id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
