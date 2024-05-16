import { Module } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { SheetController } from './sheet.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SheetEntity} from "./entities/sheet.entity";
import {SheetCategoryEntity} from "./entities/sheet-category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SheetEntity, SheetCategoryEntity])],
  controllers: [SheetController],
  providers: [SheetService],
})
export class SheetModule {}
