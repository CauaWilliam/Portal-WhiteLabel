import { FastifyInstance } from "fastify";
import { chipCreateController } from "../controllers/chip/chip.create.controller";




export async function chipRoutes(fastify: FastifyInstance){
    fastify.post("/" , chipCreateController);
}