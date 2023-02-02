import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionType {

  @PrimaryGeneratedColumn('uuid')
  Id : string;
 
  @Column()
  Name: string;

 
}