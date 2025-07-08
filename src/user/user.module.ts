import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotiferModule } from 'src/notifer/notifer.module';

/**
 * D: Dependency Inversion Principle (DIP)
 *  UserService depends on NotifierService abstraction, not low-level notification logic email or sms one.
 */
@Module({
  imports: [TypeOrmModule.forFeature([User]), NotiferModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
