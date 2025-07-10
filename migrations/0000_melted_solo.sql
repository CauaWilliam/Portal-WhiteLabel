CREATE TABLE "chip" (
	"id" serial PRIMARY KEY NOT NULL,
	"iccd" varchar(255),
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "POS" (
	"id" serial PRIMARY KEY NOT NULL,
	"numero_serie" varchar(100) NOT NULL,
	"whitelabel_id" integer,
	"chip_id" integer,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "whitelabel" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" varchar(250) NOT NULL,
	"endereço" varchar(600) NOT NULL,
	"senha" varchar(400) NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "POS" ADD CONSTRAINT "POS_whitelabel_id_whitelabel_id_fk" FOREIGN KEY ("whitelabel_id") REFERENCES "public"."whitelabel"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "POS" ADD CONSTRAINT "POS_chip_id_chip_id_fk" FOREIGN KEY ("chip_id") REFERENCES "public"."chip"("id") ON DELETE restrict ON UPDATE no action;