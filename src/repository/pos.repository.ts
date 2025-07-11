import db from "../db/drizzle_config";
import {eq} from "drizzle-orm";
import { pos_schema } from "../db/schema/pos.schema";
import { PosEntity } from "../entity/pos.entity";


export class PosRepository {
    async save(numero_serie: PosEntity) { 
        const result = await db.insert(pos_schema).values(numero_serie as any).returning();
        return result[0];
    }
    async find() {
        return await db.select().from(pos_schema);
    }
    async findById(id: number) {
        return await db.select().from(pos_schema).where(eq(pos_schema.id, id));
    }
    async update(id: number, numero_serie: PosEntity) {
        await db.update(pos_schema).set(numero_serie as any).where(eq(pos_schema.id, id));
    }
    async delete(id: number) {
        await db.delete(pos_schema).where(eq(pos_schema.id, id));
    }
}