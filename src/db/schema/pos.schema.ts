import { pgTable, serial, varchar, integer, timestamp } from 'drizzle-orm/pg-core';
import { whitelabel_schema } from './whitelabel.schema';
import { chip_schema } from './chip.schema';

export const pos_schema = pgTable('POS', {
  id: serial('id').primaryKey(),
  numero_serie: varchar('numero_serie', { length: 100 }).notNull(),
  whitelabel_id: integer('whitelabel_id').references(() => whitelabel_schema.id, { onDelete: 'cascade' }),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  created_at: timestamp('created_at').notNull().defaultNow(),
});