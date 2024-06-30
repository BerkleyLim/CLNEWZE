package com.clnewze.back.clnewzeback.room;

import com.clnewze.back.clnewzeback.room.dto.RoomDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@Mapper
public interface RoomMapper {
    // 전체 연습실 리스트 출력
    List<RoomDTO> getRooms(Long uno, int pageNo, int limit, String search);

    Long countRooms(String search, Long uno);

    int selectListAllCount();

    // 악보 삽입
    int insertRoom(RoomDTO roomDTO);

    // 악보 수정
    int updateRoom(RoomDTO roomDTO);

    // 악보 삭제
    int deleteRoom(Long rno);

    // 악보 DB 삭제 전 파일 있는지 유효성 검사 후 파일 삭제를 위한 조회
    RoomDTO selectRoomFilePathById(Long rno);
}
