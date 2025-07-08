import { PartialType } from '@nestjs/mapped-types';
import { CreateNotiferDto } from './create-notifer.dto';

export class UpdateNotiferDto extends PartialType(CreateNotiferDto) {}
