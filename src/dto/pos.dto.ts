import { IsNotEmpty, IsString} from "class-validator";


export class PosDto{
    @IsString()
    @IsNotEmpty()
    numero_serie: string;

    static create (data: Partial<PosDto>) {
        return Object.assign(new PosDto(), data);
    }
}

