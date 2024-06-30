package com.clnewze.back.clnewzeback.sheet;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.sheet.dto.SheetMenuCategoryDTO;

@Repository
@Mapper
public interface SheetMenuCategoryMapper {
  List<SheetMenuCategoryDTO> category();

  Long categoryCountSheetMenu();

  // 마지막행 조회 (orderby 지정용으로 사용)
  SheetMenuCategoryDTO lastSheetMenuTable();

  Integer createSheetMenu(String name, String category);

  Integer orderbyChangeSheetMenu(Long smtno, Long changeOrder);

  Integer updateSheetMenu(Long smtno, String name, String category);

  Integer deleteSheetMenu(Long smtno);

}
