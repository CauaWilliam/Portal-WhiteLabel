import db from "../db/drizzle_config";
import { whitelabel_schema } from "../db/schema/whitelabel.schema";
import { WhitelabelEntity } from "../entity/witelabel.entity";
import { eq } from "drizzle-orm";


export class WhitelabelRepository {
    async save(user: WhitelabelEntity) { 
        const result = await db.insert(whitelabel_schema).values(user as any).returning();
        return result[0];
    }
    async find() {
        return await db.select().from(whitelabel_schema);
    }
    async findById(id: number) {
        return await db.select().from(whitelabel_schema).where(eq(whitelabel_schema.id, id));
    }
    async update(id: number, user: WhitelabelEntity) {
        await db.update(whitelabel_schema).set(user as any).where(eq(whitelabel_schema.id, id));
    }
    async delete(id: number) {
        await db.delete(whitelabel_schema).where(eq(whitelabel_schema.id, id));
    }
}