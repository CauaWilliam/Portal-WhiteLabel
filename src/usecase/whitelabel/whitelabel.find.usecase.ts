import { WhitelabelRepository } from "../../repository/whitelabel.repository";


export class WhitelabelFindUsecase {
    constructor(private readonly whitelabelRepository: WhitelabelRepository) {}

    async execute() {
       return this.whitelabelRepository.find()
    }
}
