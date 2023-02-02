import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm"
import { Wallet } from './wallet.entity';

@EventSubscriber()
export class WalletSubscriber implements EntitySubscriberInterface<Wallet> {
  listenTo() {
    return Wallet;
  }

  afterInsert(event: InsertEvent<Wallet>) {

    console.log(event.entity.balance);
    // handle the insert event
  }
}
