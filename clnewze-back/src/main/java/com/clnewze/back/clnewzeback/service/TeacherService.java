package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.Teacher;
import com.clnewze.back.clnewzeback.domain.TeacherMenuCategory;
import com.clnewze.back.clnewzeback.mapper.TeacherMapper;
import com.clnewze.back.clnewzeback.mapper.TeacherMenuCategoryMapper;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TeacherService {
  @Autowired
  TeacherMapper teacherMapper;
  @Autowired
  TeacherMenuCategoryMapper teacherMenuCategoryMapper;

  public List<Teacher> selectList(String major) {
    return teacherMapper.selectList(major);
  }

  /**
   * 
   */
  public List<TeacherMenuCategory> category() {
    log.info("Service : TeacherMenu : category() 호출 성공");
    return teacherMenuCategoryMapper.category();
  }

  public Long categoryCountTeacherMenu() {
    log.info("Service : TeacherMenu : categoryCount() 호출 성공");
    return teacherMenuCategoryMapper.categoryCountTeacherMenu();
  }

  public Integer createTeacherMenu(String name, String category) {
    log.info("Service : TeacherMenu : create() 호출 성공");
    return teacherMenuCategoryMapper.createTeacherMenu(name, category);
  };

  public Integer orderbyChangeTeacherMenu(Long mtno, Long changeOrder) {
    log.info("Service : TeacherMenu : orderby Change() 호출 성공");
    return teacherMenuCategoryMapper.orderbyChangeTeacherMenu(mtno, changeOrder);
  }

  public Integer updateTeacherMenu(Long mtno, String name, String category) {
    log.info("Service : TeacherMenu : update() 호출 성공");
    return teacherMenuCategoryMapper.updateTeacherMenu(mtno, name,
        category);
  }

  public Integer deleteTeacherMenu(Long mtno) {
    log.info("Service : TeacherMenu : delete() 호출 성공");
    return teacherMenuCategoryMapper.deleteTeacherMenu(mtno);
  }
}
