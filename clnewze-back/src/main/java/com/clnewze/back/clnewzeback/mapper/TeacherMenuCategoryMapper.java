package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.TeacherMenuCategory;

@Repository
@Mapper
public interface TeacherMenuCategoryMapper {
  List<TeacherMenuCategory> category();

  Long categoryCountTeacherMenu();

  Integer createTeacherMenu(String name, String category);

  Integer orderbyChangeTeacherMenu(Long mtno, Long changeOrder);

  Integer updateTeacherMenu(Long mtno, String name, String category);

  Integer deleteTeacherMenu(Long mtno);

}
