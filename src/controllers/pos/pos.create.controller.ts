import { FastifyInstance , FastifyReply, FastifyRequest } from "fastify";
import { PosDto } from "../dto/pos.dto";
import { PosCreateUseCase } from "../../usecase/pos/pos.create.usecase";
import { PosRepository } from "../../repository/pos.repository";
import { validateOrReject } from "class-validator";



export async function posCreateController(req: FastifyRequest, res: FastifyReply) {
    const body = PosDto.create(req.body as any);
    await validateOrReject(body);

    const posCreateUsecase = new PosCreateUseCase(new PosRepository());
    const result = await posCreateUsecase.execute(body);
    res.status(201).send(result);
}