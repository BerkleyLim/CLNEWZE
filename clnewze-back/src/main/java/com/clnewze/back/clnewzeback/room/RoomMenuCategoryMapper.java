package com.clnewze.back.clnewzeback.room;

import com.clnewze.back.clnewzeback.room.dto.RoomMenuCategoryDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface RoomMenuCategoryMapper {
    List<RoomMenuCategoryDTO> category();

    Long categoryCountRoomMenu();

    // 마지막행 조회 (orderby 지정용으로 사용)
    RoomMenuCategoryDTO lastRoomMenuTable();

    Integer createRoomMenu(String name, String category);

    Integer orderbyChangeRoomMenu(Long rtno, Long changeOrder);

    Integer updateRoomMenu(Long rtno, String name, String category);

    Integer deleteRoomMenu(Long rtno);

}
