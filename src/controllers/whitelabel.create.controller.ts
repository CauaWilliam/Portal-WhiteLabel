import { FastifyRequest, FastifyReply } from "fastify"; 
import { WhiteLabelDto } from "../dto/whitelabel.dto";
import { validateOrReject } from "class-validator";
import { WhitelabelCreateUsecase } from "../usecase/whitelabel.create.usecase";
import { WhitelabelRepository } from "../repository/whitelabel.repository";
 
export async function whitelabelCreateController(req: FastifyRequest, res: FastifyReply) { 
    const body = WhiteLabelDto.create(req.body as any);
    await validateOrReject(body);
    
    
    const whitelabelCreateUsecase = new WhitelabelCreateUsecase(new WhitelabelRepository());
    await whitelabelCreateUsecase.execute(body);
    res.status(201).send();
}