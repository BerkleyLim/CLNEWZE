import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SheetCategoryEntity } from "./entities/sheet-category.entity";
import { SheetEntity } from "./entities/sheet.entity";

@Injectable()
export class SheetService {

  constructor(
    @InjectRepository(SheetEntity)
    private readonly sheetRepository: Repository<SheetEntity>,
    @InjectRepository(SheetCategoryEntity)
    private readonly sheetCategoryRepository: Repository<SheetCategoryEntity>
  ) {}

  async findAllSheetMusic() {
    return await this.sheetRepository.find();
  }

  async findAllCategory() {
    const sheetCategory = await this.sheetCategoryRepository.find();

    // typeorm 동적 쿼리 셋팅 공부 전 javascript 기능을 활용한 orderby 기준 정렬 처리
    sheetCategory.sort((a, b) => a.orderby - b.orderby);
    return sheetCategory;
  }

}
