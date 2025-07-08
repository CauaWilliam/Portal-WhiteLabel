import { pgTable, integer, varchar, timestamp, serial } from 'drizzle-orm/pg-core';

export const whitelabel_schema = pgTable('whitelabel', {
  id: serial('id').primaryKey(),
  nome: varchar('nome', { length: 250 }).notNull(),
  endereco: varchar('endereço', { length: 600 }).notNull(),
  senha: varchar('senha', { length: 400 }).notNull(),

  updated_at: timestamp('updated_at').notNull().defaultNow(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  
});