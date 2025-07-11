import { FastifyInstance } from "fastify";
import { posCreateController } from "../controllers/pos/pos.create.controller";


export async function posRoutes(fastify: FastifyInstance) {
    fastify.post("/", posCreateController);
}