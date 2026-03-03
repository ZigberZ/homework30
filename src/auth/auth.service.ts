import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hash } from 'argon2';
import { RegisterRequestDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  private readonly JWT_SECRET : string;
  private readonly JWT_ACCES_Token_TTL : string;
  private readonly JWT_REFRESH_Token_TTL : string;

  constructor(private prisma:PrismaService, private configService: ConfigService){
    this.JWT_SECRET =  this.configService.getOrThrow<string>('JWT_SECRET')
    this.JWT_ACCES_Token_TTL = this.configService.getOrThrow<string>('JWT_ACCES_Token_TTL')
    this.JWT_REFRESH_Token_TTL = this.configService.getOrThrow<string>('JWT_REFRESH_Token_TTL')
  }
  async register(dto: RegisterRequestDto){
    const {email,password,name} = dto
    const existingUser = await this.prisma.user.findUnique({
      where: {email},
    })
    if(existingUser){
      throw new Error('User already exists')
    }
    const user = await this.prisma.user.create({
      data:{
        email,
        name,
        password: await hash(password)
      }
    })
    return user
  }
}
