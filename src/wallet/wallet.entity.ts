import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  
  @Column()
  name: string;

  @Column('int')
  balance: number;

  
  @ManyToOne(() => User, (User) => User.id, { cascade: true })
  user: string; //foreign key references for the user(id)
}