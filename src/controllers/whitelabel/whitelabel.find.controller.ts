import { FastifyRequest, FastifyReply } from "fastify"; 
import { WhitelabelRepository } from "../../repository/whitelabel.repository";
import { WhitelabelFindUsecase } from "../../usecase/whitelabel.find.usecase";
 
export async function whitelabelFindController(req: FastifyRequest, res: FastifyReply) { 
    
    
    
    const whitelabelFindUsecase = new WhitelabelFindUsecase(new WhitelabelRepository());
    const response = await whitelabelFindUsecase.execute();
    res.send(response);
}