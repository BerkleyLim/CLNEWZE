import {Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode} from '@nestjs/common';
import { SheetService } from './sheet.service';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
import {SheetEntity} from "./entities/sheet.entity";
import {SheetCategoryEntity} from "./entities/sheet-category.entity";

@Controller('sheet')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Post()
  create(@Body() createSheetDto: CreateSheetDto) {
    return this.sheetService.create(createSheetDto);
  }

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sheetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSheetDto: UpdateSheetDto) {
    return this.sheetService.update(+id, updateSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sheetService.remove(+id);
  }
}
