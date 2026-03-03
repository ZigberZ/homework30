import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode,HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequestDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: RegisterRequestDto){
    return this.authService.register(dto)
  }
 
}
