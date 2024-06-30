import { Injectable } from '@nestjs/common';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
import {SheetEntity} from "./entities/sheet.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {DataSource, Repository} from "typeorm";
import {SheetCategoryEntity} from "./entities/sheet-category.entity";

@Injectable()
export class SheetService {

  constructor(
    @InjectRepository(SheetEntity)
    private readonly sheetRepository: Repository<SheetEntity>,
    @InjectRepository(SheetCategoryEntity)
    private readonly sheetCategoryRepository: Repository<SheetCategoryEntity>
  ) {}

  create(createSheetDto: CreateSheetDto) {
    return 'This action adds a new sheet';
  }

  async findAllSheetMusic() {
    return await this.sheetRepository.find();
  }

  async findAllCategory() {
    const sheetCategory = await this.sheetCategoryRepository.find();

    // typeorm 동적 쿼리 셋팅 공부 전 javascript 기능을 활용한 orderby 기준 정렬 처리
    sheetCategory.sort((a, b) => a.orderby - b.orderby);
    return sheetCategory;
  }

  findOne(id: number) {
    return `This action returns a #${id} sheet`;
  }

  update(id: number, updateSheetDto: UpdateSheetDto) {
    return `This action updates a #${id} sheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} sheet`;
  }
}
