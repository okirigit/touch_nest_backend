import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from 'src/wallet/wallet.entity';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(user:string): Promise<Wallet[]> {
    return this.userService.findAll(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Wallet> {
    return this.userService.findOne(id);
  }


  @Post('/register')
  async create(@Body() User: User): Promise<void> {
    return this.userService.create(User);
  }
}