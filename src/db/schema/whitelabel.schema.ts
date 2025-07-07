import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';

export const whitelabel_schema = pgTable('whitelabel', {
  id: integer('id').primaryKey(),
  nome: varchar('nome', { length: 250 }).notNull(),
  endereco: varchar('endereço', { length: 600 }).notNull(),
  senha: varchar('senha', { length: 400 }).notNull(),
});