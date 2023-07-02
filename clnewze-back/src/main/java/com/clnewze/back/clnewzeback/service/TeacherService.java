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
    log.info("Service : category() 호출 성공");
    return teacherMenuCategoryMapper.category();
  }
}
