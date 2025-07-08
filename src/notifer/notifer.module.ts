import { Module } from '@nestjs/common';
import { NotiferService } from './notifer.service';
import { NotiferController } from './notifer.controller';
import { EmailNotifier, SMSNotifier } from './notifier-abstract.interface';




@Module({
  controllers: [NotiferController],
  providers: [
    EmailNotifier,
    SMSNotifier,
    {
      provide: NotiferService,
      useFactory: (email: EmailNotifier, sms: SMSNotifier) =>
        new NotiferService([email, sms]),
      inject: [EmailNotifier, SMSNotifier],
    },
  ],
  exports: [NotiferService],
})
export class NotiferModule {}
