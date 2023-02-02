import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionType } from './transactionType.entity';

@Injectable()
export class TransactionTypeService {
  constructor(
    @InjectRepository(TransactionType)
   
    private readonly transactionRepository: Repository<TransactionType>,
  ) {

   
this.initTypes();
   
  }
 
 async initTypes():Promise<void>{
    var value = await this.transactionRepository.find();
    console.log(value);
 
    
    
    if(value.length == 0){
        value.push({"Id":"EA1D7897-C03F-43B2-80B8-1D5FA561E981","Name": "Expense"});
        value.push({"Id":"7D3D4408-A28F-4188-9436-10B545277D85", 
        "Name": 'Income'});
       this.transactionRepository.save(value[0]);
       this.transactionRepository.save(value[1]);
    }
 }
  async findAll(): Promise<TransactionType[]> {
    return this.transactionRepository.find();
  }

  async findOne(Id: string): Promise<TransactionType> {
    return this.transactionRepository.findOne({where:{Id}})
  }

  async create(transaction: TransactionType): Promise<void> {
    await this.transactionRepository.save(transaction);
  }
}
