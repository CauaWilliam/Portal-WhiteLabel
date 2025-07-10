import { FastifyRegister, FastifyReply, FastifyRequest } from "fastify";
import { ChipDto } from "../dto/chip.dto";
import { validateOrReject } from "class-validator";
import { ChipCreateUseCase } from "../../usecase/chip/chip.create.usecase";
import { ChipRepository } from "../../repository/chip.repository";



export async function chipCreateController(req:FastifyRequest, res: FastifyReply ) {   
    const body = ChipDto.create(req.body as any);
    await validateOrReject(body);


    const chipCreateUsecase = new ChipCreateUseCase(new ChipRepository());
    const result = await chipCreateUsecase.execute(body);
    res.status(201).send(result);
}