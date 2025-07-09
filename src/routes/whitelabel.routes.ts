import { FastifyInstance } from "fastify";
import { whitelabelCreateController } from "../controllers/whitelabel/whitelabel.create.controller";
import { whitelabelFindController } from "../controllers/whitelabel/whitelabel.find.controller";


export async function whitelabelRoutes(fastify: FastifyInstance) {
    fastify.post("/", whitelabelCreateController);
    fastify.get("/", whitelabelFindController);
}
