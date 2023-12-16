package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.entity.TeacherMenuCategory;

@Repository
@Mapper
public interface TeacherMenuCategoryMapper {
  List<TeacherMenuCategory> category();

  Long categoryCountTeacherMenu();

  // 마지막행 조회 (orderby 지정용으로 사용)
  public TeacherMenuCategory lastTeacherMenuTable();

  Integer createTeacherMenu(String name, String category);

  Integer orderbyChangeTeacherMenu(Long mtno, Long changeOrder);

  Integer updateTeacherMenu(Long mtno, String name, String category);

  Integer deleteTeacherMenu(Long mtno);

}
