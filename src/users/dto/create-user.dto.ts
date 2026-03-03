import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ description: 'User email', example: 'user@example.com' })
    @IsEmail()
    email: string;
    @ApiProperty({ description: 'User name', example: 'John Doe' })
    @IsString()
    @MinLength(2)
    name: string;
    @ApiProperty({ description: 'User password', example: 'password123' })
    @IsString()
    @MinLength(6)
    password: string;
}
