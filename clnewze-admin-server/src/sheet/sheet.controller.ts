import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { SheetCategoryEntity } from "./entities/sheet-category.entity";
import { SheetEntity } from "./entities/sheet.entity";
import { SheetService } from './sheet.service';

@Controller('sheet')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllSheetMusic(): Promise<SheetEntity[]> {
    return this.sheetService.findAllSheetMusic();
  }

  @Get('category')
  @HttpCode(HttpStatus.OK)
  async findAllCategory(): Promise<SheetCategoryEntity[]> {
    return this.sheetService.findAllCategory();
  }
}
