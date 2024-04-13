/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/CreateUser.dto';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<any> {
    const { email } = createUserDto;
    const userExists = await this.usersService.findUserByEmail(email);
    if (userExists) {
      throw new UnauthorizedException('Email is already registered');
    }
    const createdUser = await this.usersService.create(createUserDto);
    const { password, ...result } = createdUser;
    return result;
  }

  async login(authDto: AuthDto) {
    const { email, password } = authDto;
    const user = await this.usersService.findUserByEmail(email);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
