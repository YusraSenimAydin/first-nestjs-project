import { Injectable } from '@nestjs/common';
import {User } from './user.model';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getUsers() : Promise<User[]> {
     return this.users;
  }
}
