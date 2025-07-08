ALTER TABLE "whitelabel" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "whitelabel" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;