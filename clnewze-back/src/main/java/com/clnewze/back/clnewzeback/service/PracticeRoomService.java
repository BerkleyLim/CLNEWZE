package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.entity.dao.PracticeRoom;
import com.clnewze.back.clnewzeback.entity.dao.PracticeRoomMenuCategory;
import com.clnewze.back.clnewzeback.mapper.PracticeRoomMapper;
import com.clnewze.back.clnewzeback.mapper.PracticeRoomMenuCategoryMapper;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PracticeRoomService {
  @Autowired
  PracticeRoomMapper practiceRoomMapper;

  @Autowired
  PracticeRoomMenuCategoryMapper practiceRoomMenuCategoryMapper;

  public List<PracticeRoom> selectList(String categories) {
    return practiceRoomMapper.selectList(categories);
  }

  // 여기서부터 메뉴 관리
  public List<PracticeRoomMenuCategory> category() {
    log.info("Service : PracticeRoomMenu : category() 호출 성공");
    return practiceRoomMenuCategoryMapper.category();
  }

  // 마지막 행 테이블 출력 (생성시 orderby 지정용으로)
  public PracticeRoomMenuCategory lastPracticeRoomMenuTable() {
    return practiceRoomMenuCategoryMapper.lastPracticeRoomMenuTable();
  }

  public Long categoryCountPracticeRoomMenu() {
    log.info("Service : PracticeRoomMenu : categoryCount() 호출 성공");
    return practiceRoomMenuCategoryMapper.categoryCountPracticeRoomMenu();
  }

  public Integer createPracticeRoomMenu(String name, String category) {
    log.info("Service : PracticeRoomMenu : create() 호출 성공");
    return practiceRoomMenuCategoryMapper.createPracticeRoomMenu(name, category);
  };

  public Integer orderbyChangePracticeRoomMenu(Long smtno, Long changeOrder) {
    log.info("Service : PracticeRoomMenu : orderby Change() 호출 성공");
    return practiceRoomMenuCategoryMapper.orderbyChangePracticeRoomMenu(smtno, changeOrder);
  }

  public Integer updatePracticeRoomMenu(Long smtno, String name, String category) {
    log.info("Service : PracticeRoomMenu : update() 호출 성공");
    return practiceRoomMenuCategoryMapper.updatePracticeRoomMenu(smtno, name,
        category);
  }

  public Integer deletePracticeRoomMenu(Long smtno) {
    log.info("Service : PracticeRoomMenu : delete() 호출 성공");
    return practiceRoomMenuCategoryMapper.deletePracticeRoomMenu(smtno);
  }

}
