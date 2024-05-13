package com.clnewze.back.clnewzeback.sheet;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.sheet.dto.SheetMusic;
import com.clnewze.back.clnewzeback.sheet.dto.SheetMusicMenuCategory;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@AllArgsConstructor
public class SheetMusicService {
  private SheetMusicMapper sheetMusicMapper;
  private SheetMusicMenuCategoryMapper sheetMusicMenuCategoryMapper;

  // 전체 악보 출력 (10페이지 단위, genre와 uno가 존재 시 그 조건에 맞게 출력함)
  public List<SheetMusic> selectList(String genre, Long uno, int pageNo, int limit) {
    return sheetMusicMapper.selectList(genre, uno, pageNo, limit);
  }

  // 악보 전체 갯수 보기
  public int selectListAllCount() {
    return sheetMusicMapper.selectListAllCount();
  }

  // 악보 삽입
  public int insertSheetMusic(SheetMusic sheetMusic) {
    return sheetMusicMapper.insertSheetMusic(sheetMusic);
  }

  // 악보 수정
  public int updateSheetMusic(SheetMusic sheetMusic) {
    return sheetMusicMapper.updateSheetMusic(sheetMusic);
  }

  // 악보 삭제
  public int deleteSheetMusic(SheetMusic sheetMusic) {
    return sheetMusicMapper.deleteSheetMusic(sheetMusic);
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
