import { UserDto } from "../controllers/whitelabel/dto/users.dto";
import { WhitelabelEntity } from "../entity/witelabel.entity";
import { WhitelabelRepository } from "../repository/whitelabel.repository";
import { gerarHash } from "../script/hash_generator";


export class WhitelabelCreateUsecase {
    constructor(private readonly whitelabelRepository: WhitelabelRepository) {}

    async execute(data: UserDto) {
        const hash = await gerarHash(data.senha);

        const payload = WhitelabelEntity.create({
            ...data,            
            senha: hash,            
            created_at: new Date(),
        });
        console.log(payload);
        await this.whitelabelRepository.save(payload);
    }
}