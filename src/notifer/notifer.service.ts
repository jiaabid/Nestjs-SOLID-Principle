import { Injectable } from '@nestjs/common';
import { CreateNotiferDto } from './dto/create-notifer.dto';
import { UpdateNotiferDto } from './dto/update-notifer.dto';
import { Notifier } from './notifier-abstract.interface';

@Injectable()
export class NotiferService {
    constructor (private readonly notifiers: Notifier[]) { }

  notify(notifierPayload: CreateNotiferDto) {
    //the loop is to utilize all the notifiers
    for (const notifier of this.notifiers) {
      notifier.notify(notifierPayload.to, notifierPayload.message);
    }
  }
}
