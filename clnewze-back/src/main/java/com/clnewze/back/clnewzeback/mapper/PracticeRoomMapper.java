package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.entity.dao.PracticeRoom;

@Repository
@Mapper
public interface PracticeRoomMapper {
  public List<PracticeRoom> selectList(String categories, int pageNo, int limit);

  public int selectListAllCount();
}
