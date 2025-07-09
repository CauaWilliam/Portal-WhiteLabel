import { IsNotEmpty, IsString} from "class-validator";


export class LogisticaDto{
    @IsString()
    @IsNotEmpty()
    numero_serie: string;

    @IsString()
    @IsNotEmpty()
    chip: string;

static create (data: Partial<LogisticaDto>) {
    return Object.assign(new LogisticaDto(), data);
}
}
