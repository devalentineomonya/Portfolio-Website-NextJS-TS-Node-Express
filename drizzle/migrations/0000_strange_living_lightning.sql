CREATE TABLE IF NOT EXISTS "userTable" (
	"user_id" serial NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"is_admin" boolean DEFAULT false NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "userTable_email_unique" UNIQUE("email")
);
