import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { Wallet } from './wallet.entity';
import { WalletSubscriber } from './walletEvent';

import { TransactionType } from '../transaction/transactionType.entity';
import { Transaction } from '../transaction/transaction.entity';

import { TransactionTypeService } from '../transaction/transactionType.service';
import { TransactionService } from '../transaction/transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet,Transaction,TransactionType])],
  controllers: [WalletController],
  providers: [WalletService,TransactionTypeService,TransactionService,WalletSubscriber],
})
export class WalletModule {}