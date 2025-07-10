import db from "../db/drizzle_config";
import { chip_schema } from "../db/schema/chip.schema";
import { ChipEntity } from "../entity/chip.entity";
import {eq} from "drizzle-orm";


export class ChipRepository {
    async save(iccd: ChipEntity) { 
        const result = await db.insert(chip_schema).values(iccd as any).returning();
        return result[0];
    }
    async find() {
        return await db.select().from(chip_schema);
    }
    async findById(id: number) {
        return await db.select().from(chip_schema).where(eq(chip_schema.id, id));
    }
    async update(id: number, iccd: ChipEntity) {
        await db.update(chip_schema).set(iccd as any).where(eq(chip_schema.id, id));
    }
    async delete(id: number) {
        await db.delete(chip_schema).where(eq(chip_schema.id, id));
    }
}