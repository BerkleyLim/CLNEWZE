package com.clnewze.back.clnewzeback.teacher;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.teacher.dto.Teacher;
import com.clnewze.back.clnewzeback.teacher.dto.TeacherMenuCategory;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@AllArgsConstructor
public class TeacherService {
  private TeacherMapper teacherMapper;
  private TeacherMenuCategoryMapper teacherMenuCategoryMapper;

  public List<Teacher> selectList(String major, Long uno, int pageNo, int limit) {
    return teacherMapper.selectList(major, uno, pageNo, limit);
  }

  public int selectListAllCount() {
    return teacherMapper.selectListAllCount();
  }

  /**
   * 
   */
  public List<TeacherMenuCategory> category() {
    log.info("Service : TeacherMenu : category() 호출 성공");
    return teacherMenuCategoryMapper.category();
  }

  // 마지막 행 테이블 출력 (생성시 orderby 지정용으로)
  public TeacherMenuCategory lastTeacherMenuTable() {
    return teacherMenuCategoryMapper.lastTeacherMenuTable();
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
