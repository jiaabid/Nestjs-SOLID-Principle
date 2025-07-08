import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotiferService } from './notifer.service';
import { CreateNotiferDto } from './dto/create-notifer.dto';
import { UpdateNotiferDto } from './dto/update-notifer.dto';

@Controller('notifer')
export class NotiferController {
  constructor(private readonly notiferService: NotiferService) {}

  @Post()
  notify(@Body() createNotiferDto: CreateNotiferDto) {
    return this.notiferService.notify(createNotiferDto);
  }

}
