package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.entity.SheetMusicMenuCategory;

@Repository
@Mapper
public interface SheetMusicMenuCategoryMapper {
  List<SheetMusicMenuCategory> category();

  Long categoryCountSheetMusicMenu();

  // 마지막행 조회 (orderby 지정용으로 사용)
  public SheetMusicMenuCategory lastSheetMusicMenuTable();

  Integer createSheetMusicMenu(String name, String category);

  Integer orderbyChangeSheetMusicMenu(Long smtno, Long changeOrder);

  Integer updateSheetMusicMenu(Long smtno, String name, String category);

  Integer deleteSheetMusicMenu(Long smtno);

}
