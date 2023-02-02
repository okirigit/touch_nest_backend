import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from 'src/wallet/wallet.entity';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<Wallet>,
  ) {}

  async findAll(user:string): Promise<Wallet[]> {
    return this.userRepository.find({where:{user}});
  }

  async findOne(id: string): Promise<Wallet> {
    return this.userRepository.findOne({where:{id}})
  }

  async create(user: User): Promise<void> {
    await this.userRepository.save(user);
  }
}
