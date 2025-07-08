import { IsNotEmpty, IsString } from "class-validator";


export class ChipDto{
    @IsString()
    @IsNotEmpty()
    ICCD: string;
}