import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { TransactionType } from './transactionType.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
   
    private readonly transactionRepository: Repository<Transaction>,
  ) {

   
  }
 
 
  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  async findOne(Id: string): Promise<Transaction> {
    return this.transactionRepository.findOne({where:{Id}})
  }

  async create(transaction: Transaction): Promise<void> {
    await this.transactionRepository.save(transaction);
  }
}
