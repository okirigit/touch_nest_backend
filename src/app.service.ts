import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
@Injectable()
export class AppService {
  constructor(@InjectConnection() 
  private readonly connection: Connection) 
  {
    this.doSomeQuery();
  }

  async doSomeQuery() {
    return this.connection.query("insert into [money_tracker].[dbo].transaction_type SELECT NEWID(),'Income'");
  }

 


}
