package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.SheetMusic;
import com.clnewze.back.clnewzeback.domain.SheetMusicMenuCategory;
import com.clnewze.back.clnewzeback.mapper.SheetMusicMapper;
import com.clnewze.back.clnewzeback.mapper.SheetMusicMenuCategoryMapper;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SheetMusicService {
  @Autowired
  SheetMusicMapper sheetMusicMapper;
  @Autowired
  SheetMusicMenuCategoryMapper sheetMusicMenuCategoryMapper;

  public List<SheetMusic> selectList(String genre) {
    return sheetMusicMapper.selectList(genre);
  }

  // 여기서부터 메뉴 관리
  public List<SheetMusicMenuCategory> category() {
    log.info("Service : SheetMusicMenu : category() 호출 성공");
    return sheetMusicMenuCategoryMapper.category();
  }

  // 마지막 행 테이블 출력 (생성시 orderby 지정용으로)
  public SheetMusicMenuCategory lastSheetMusicMenuTable() {
    return sheetMusicMenuCategoryMapper.lastSheetMusicMenuTable();
  }

  public Long categoryCountSheetMusicMenu() {
    log.info("Service : SheetMusicMenu : categoryCount() 호출 성공");
    return sheetMusicMenuCategoryMapper.categoryCountSheetMusicMenu();
  }

  public Integer createSheetMusicMenu(String name, String category) {
    log.info("Service : SheetMusicMenu : create() 호출 성공");
    return sheetMusicMenuCategoryMapper.createSheetMusicMenu(name, category);
  };

  public Integer orderbyChangeSheetMusicMenu(Long mtno, Long changeOrder) {
    log.info("Service : SheetMusicMenu : orderby Change() 호출 성공");
    return sheetMusicMenuCategoryMapper.orderbyChangeSheetMusicMenu(mtno, changeOrder);
  }

  public Integer updateSheetMusicMenu(Long mtno, String name, String category) {
    log.info("Service : SheetMusicMenu : update() 호출 성공");
    return sheetMusicMenuCategoryMapper.updateSheetMusicMenu(mtno, name,
        category);
  }

  public Integer deleteSheetMusicMenu(Long mtno) {
    log.info("Service : SheetMusicMenu : delete() 호출 성공");
    return sheetMusicMenuCategoryMapper.deleteSheetMusicMenu(mtno);
  }

}
