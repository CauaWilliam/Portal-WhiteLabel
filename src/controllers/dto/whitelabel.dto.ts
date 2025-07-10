import {   IsNotEmpty, IsString, MaxLength } from "class-validator";


export class WhiteLabelDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
   
    @IsString()
    @IsNotEmpty()
    endereco: string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    senha: string;

    static create (data: Partial<WhiteLabelDto>) {
        return Object.assign(new WhiteLabelDto(), data);
    }
}