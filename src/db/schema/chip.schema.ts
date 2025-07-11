import { pgTable, serial, varchar, integer, timestamp } from 'drizzle-orm/pg-core';
import { whitelabel_schema } from './whitelabel.schema';

export const chip_schema= pgTable('chip' ,{
    id: serial('id').primaryKey(),
    iccd: varchar('iccd' , {length: 255}),
    whitelabel: varchar ('whitelabel' , {length:255}),
    whitelabel_id: integer('whitelabel_id').references(() => whitelabel_schema.id, { onDelete: 'set null' }),

    
    updated_at: timestamp('updated_at').notNull().defaultNow(),
    created_at: timestamp('created_at').notNull().defaultNow(),
  });