import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get-all')
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<User> {
    return this.usersService.findById(userId);
  }

  @Post()
  async createUser(@Body() userData: any): Promise<User> {
    return this.usersService.create(userData);
  }
}
