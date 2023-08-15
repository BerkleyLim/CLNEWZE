package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.entity.dto.SheetMusic;
import com.clnewze.back.clnewzeback.entity.dto.SheetMusicMenuCategory;
import com.clnewze.back.clnewzeback.mapper.SheetMusicMapper;
import com.clnewze.back.clnewzeback.mapper.SheetMusicMenuCategoryMapper;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class SheetMusicService {
  @Autowired
  SheetMusicMapper sheetMusicMapper;
  @Autowired
  SheetMusicMenuCategoryMapper sheetMusicMenuCategoryMapper;

  public List<SheetMusic> selectList(String genre, int pageNo, int limit) {
    return sheetMusicMapper.selectList(genre, pageNo, limit);
  }

  public int selectListAllCount() {
    return sheetMusicMapper.selectListAllCount();
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

  public Integer orderbyChangeSheetMusicMenu(Long smtno, Long changeOrder) {
    log.info("Service : SheetMusicMenu : orderby Change() 호출 성공");
    return sheetMusicMenuCategoryMapper.orderbyChangeSheetMusicMenu(smtno, changeOrder);
  }

  public Integer updateSheetMusicMenu(Long smtno, String name, String category) {
    log.info("Service : SheetMusicMenu : update() 호출 성공");
    return sheetMusicMenuCategoryMapper.updateSheetMusicMenu(smtno, name,
        category);
  }

  public Integer deleteSheetMusicMenu(Long smtno) {
    log.info("Service : SheetMusicMenu : delete() 호출 성공");
    return sheetMusicMenuCategoryMapper.deleteSheetMusicMenu(smtno);
  }

}
