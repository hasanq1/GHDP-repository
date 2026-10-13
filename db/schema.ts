import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const registrations=sqliteTable('registrations',{id:integer('id').primaryKey({autoIncrement:true}),name:text('name').notNull(),email:text('email').notNull(),organization:text('organization').notNull(),interest:text('interest').notNull(),message:text('message').notNull().default(''),createdAt:text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`)});
