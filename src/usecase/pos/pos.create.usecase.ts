import { PosDto } from "../../controllers/dto/pos.dto";
import { PosEntity } from "../../entity/pos.entity";
import { PosRepository } from "../../repository/pos.repository";


export class PosCreateUseCase {
    constructor(private readonly posRepository: PosRepository){}
        async execute(data: PosDto){
            const payload = PosEntity.create({
                ...data,
                created_at: new Date(),
            });

            const result = await this.posRepository.save(payload);
            return result;
        }   
}