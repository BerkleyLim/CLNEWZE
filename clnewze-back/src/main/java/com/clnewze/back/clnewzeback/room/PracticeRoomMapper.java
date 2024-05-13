package com.clnewze.back.clnewzeback.room;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.room.dto.PracticeRoom;

@Repository
@Mapper
public interface PracticeRoomMapper {
  public List<PracticeRoom> selectList(String categories, Long uno, int pageNo, int limit);

  public int selectListAllCount();
}
