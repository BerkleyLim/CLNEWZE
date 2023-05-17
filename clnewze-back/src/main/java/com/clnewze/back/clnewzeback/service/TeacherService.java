package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.Teacher;
import com.clnewze.back.clnewzeback.mapper.TeacherMapper;

@Service
public class TeacherService {
  @Autowired
  TeacherMapper teacherMapper;

  public List<Teacher> selectList(String major) {
    return teacherMapper.selectList(major);
  }
}
