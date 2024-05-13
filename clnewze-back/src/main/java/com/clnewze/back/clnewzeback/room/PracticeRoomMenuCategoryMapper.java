package com.clnewze.back.clnewzeback.room;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.room.dto.PracticeRoomMenuCategory;

@Repository
@Mapper
public interface PracticeRoomMenuCategoryMapper {
  List<PracticeRoomMenuCategory> category();

  Long categoryCountPracticeRoomMenu();

  // 마지막행 조회 (orderby 지정용으로 사용)
  public PracticeRoomMenuCategory lastPracticeRoomMenuTable();

  Integer createPracticeRoomMenu(String name, String category);

  Integer orderbyChangePracticeRoomMenu(Long ptno, Long changeOrder);

  Integer updatePracticeRoomMenu(Long ptno, String name, String category);

  Integer deletePracticeRoomMenu(Long ptno);

}
