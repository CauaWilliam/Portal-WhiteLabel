import { FastifyInstance } from "fastify";
import { whitelabelCreateController } from "../controllers/whitelabel/whitelabel.create.controller";


export async function whitelabelRoutes(fastify: FastifyInstance) {
    fastify.post("/", whitelabelCreateController);
}

 