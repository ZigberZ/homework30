import { IsEmail,IsNotEmpty,IsString,MaxLength,MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterRequestDto{
    @ApiProperty({example:'user@example.com',description:'User email'})
    @IsEmail({}, {message:'Некоректный email'})
    @IsNotEmpty({message:'Email не может быть пустым'})
    @IsString({message:'Email должен быть строкой'})
    email: string

    @ApiProperty({example:'password123',description:'User password'})
    @IsNotEmpty({message:'Пароль не может быть пустым'})
    @IsString({message:'Пароль должен быть строкой'})
    @MinLength(6,{message:'Пароль должен содержать не менее 6 символов'})
    @MaxLength(32,{message:'Пароль должен содержать не более 32 символов'})
    password: string

    @ApiProperty({example:'John Doe',description:'User name'})
    @IsNotEmpty({message:'Имя не может быть пустым'})
    @IsString({message:'Имя должно быть строкой'})
    @MinLength(2,{message:'Имя должно содержать не менее 2 символов'})
    @MaxLength(32,{message:'Имя должно содержать не более 32 символов'})
    name: string
}