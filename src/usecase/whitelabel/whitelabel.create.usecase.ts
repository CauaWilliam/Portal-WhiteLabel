import { WhiteLabelDto } from "../../controllers/dto/whitelabel.dto";
import { WhitelabelEntity } from "../../entity/witelabel.entity";
import { WhitelabelRepository } from "../../repository/whitelabel.repository";
import { gerarHash } from "../../script/hash_generator";


export class WhitelabelCreateUsecase {
    constructor(private readonly whitelabelRepository: WhitelabelRepository) {}

    async execute(data: WhiteLabelDto) {
        const hash = await gerarHash(data.senha);

        const payload = WhitelabelEntity.create({
            ...data,            
            senha: hash,            
            created_at: new Date(),
        });
        const result = await this.whitelabelRepository.save(payload);
        return result;
    }
}