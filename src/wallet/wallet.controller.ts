import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import exp from 'constants';
import { Transaction } from 'src/transaction/transaction.entity';
import { TransactionService } from 'src/transaction/transaction.service';
import { TransactionTypeService } from 'src/transaction/transactionType.service';
import { Wallet } from './wallet.entity';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService,private readonly transactiotypeservice: TransactionTypeService,private readonly transactionService: TransactionService) {}

  @Get()
  async findAll(@Param('userId') userId): Promise<any> {
    return await this.walletService.findAll(userId);
  }
  
  @Get(':id')
  async findOne(@Param('id') id): Promise<any> {
    return await this.walletService.findOne(id);
  }

  @Post()
  async create(@Body() wallet: Wallet): Promise<void> {
    return this.walletService.create(wallet);
  }
  @Post('spend')
  async spend(@Body() expense: Transaction): Promise<Object> {
    var w = await this.walletService.findOne(expense.wallet);
    var type = await this.transactiotypeservice.findOne(expense.transactionType);

   
    var res = {
      "code":0,
      "message":"",
      "amount":expense.amount,
      "TransactionType":"Expense"
    };
    console.log(type.Name);
    if(w.balance >= expense.amount && type.Name == "Expense"){
      await this.transactionService.create(expense);
      res.code = 200;
     
     w.balance -= Number(expense.amount);
     await this.walletService.create(w);
     res.message = "Transaction completed successfully. Current balance for wallet("+w.name + ") is " +w.balance;

    }else{
      res.code = 502;
      res.message = "Transaction failed. Your wallet balance is not sufficient";
     
    }
    return res;
  }
  @Post('addIncome')
  async addIncome(@Body() income: Transaction): Promise<Object> {
    var w = await this.walletService.findOne(income.wallet);

    var res = {
      "code":200,
      "message":"Wallet topped up successfully ",
      "amount":income.amount,
      "TransactionType":"Income"
    };

    await this.transactionService.create(income);

    w.balance += Number(income.amount);

    await this.walletService.create(w);

    res.message = "Wallet topped up successfully. Current balance for wallet("+w.name + ") is " +w.balance;


    return res;
  }
}