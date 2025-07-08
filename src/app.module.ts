import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotiferModule } from './notifer/notifer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Makes config available everywhere
    }),
    TypeOrmModule.forRoot({
    type: 'postgres', // database type
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME,
    entities: [User],
    synchronize: Boolean(process.env.SYNC_DATABASE), // Auto creates tables (disable in production)
  }),UserModule, NotiferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
