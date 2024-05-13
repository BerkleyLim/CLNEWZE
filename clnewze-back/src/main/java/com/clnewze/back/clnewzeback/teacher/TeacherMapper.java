package com.clnewze.back.clnewzeback.teacher;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.teacher.dto.Teacher;

@Repository
@Mapper
public interface TeacherMapper {
  public List<Teacher> selectList(String major, Long uno, int pageNo, int limit);

  public int selectListAllCount();
}
