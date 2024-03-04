import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
