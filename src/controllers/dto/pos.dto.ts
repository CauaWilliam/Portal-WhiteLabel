import { IsNotEmpty, IsString, IsNumber} from "class-validator";


export class PosDto{
    @IsString()
    @IsNotEmpty()
    numero_serie!: string;

    @IsNumber()
    whitelabel_id: number
    
    static create (data: Partial<PosDto>) {
        return Object.assign(new PosDto(), data);
    }
}

