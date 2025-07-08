import {   IsNotEmpty, IsString, MaxLength } from "class-validator";


export class UserDto {
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

    static create (data: Partial<UserDto>) {
        return Object.assign(new UserDto(), data);
    }
}