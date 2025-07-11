import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class ChipDto{
    @IsString()
    iccd: string;

    @IsString()   
    whitelabel: string;

    @IsNumber()
    whitelabel_id: number

static create (data: Partial<ChipDto>) {
    return Object.assign(new ChipDto(), data);
}
}
