import { Wallet } from 'src/wallet/wallet.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TransactionType } from './transactionType.entity';

@Entity()
export class Transaction {

@PrimaryGeneratedColumn('uuid')
  Id:string;

  @Column(
    {type: 'int'}
  )
  amount: number;

  @Column()
  description: string;

  
  @ManyToOne(() => TransactionType, (TransactionType) => TransactionType.Id, { cascade: true })
  transactionType : string;

  @Column(
    {type: 'datetime'}
  )
  createdOn : string;

  @Column('uuid')
  @ManyToOne(() => Wallet, (Wallet) => Wallet.id, { cascade: true })

  wallet: string; //foreign key references wallets(id)
}