import { ChipDto } from "../../controllers/dto/chip.dto";
import { ChipEntity } from "../../entity/chip.entity";
import { ChipRepository } from "../../repository/chip.repository";





export class ChipCreateUseCase {
    constructor(private readonly chipRepository: ChipRepository) {}

    async execute(data: ChipDto) {
        const payload = ChipEntity.create({
           ...data,  
           created_at: new Date(),
        });

        const result = await this.chipRepository.save(payload);
        return result;

    }
}