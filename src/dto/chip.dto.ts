import { IsNotEmpty, IsString } from "class-validator";


export class ChipDto{
    @IsString()
    @IsNotEmpty()
    iccd: string;


static create (data: Partial<ChipDto>) {
    return Object.assign(new ChipDto(), data);
}
}
