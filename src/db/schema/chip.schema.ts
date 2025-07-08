import { pgTable, serial, varchar, integer, timestamp } from 'drizzle-orm/pg-core';

export const chip_schema= pgTable('chip' ,{
    id: serial('id').primaryKey(),
    ICCD: varchar('iccd' , {length: 255}),
    updated_at: timestamp('updated_at').notNull().defaultNow(),
    created_at: timestamp('created_at').notNull().defaultNow(),
  });