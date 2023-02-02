import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {

  }


  async findAll(user:string): Promise<Wallet[]> {
    return await this.walletRepository.find({where:{user}});
  }

  async findOne(id: string): Promise<Wallet> {
    return await this.walletRepository.findOne({where:{id}});
  }

  async create(wallet: Wallet): Promise<void> {
    await this.walletRepository.save(wallet);
  }
}