package com.clnewze.back.clnewzeback.sheet;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.sheet.dto.SheetDTO;

@Repository
@Mapper
public interface SheetMapper {
  // 전체 악보 리스트 출력 (조건 : genre, uno 값이 존재하면 해당 값만 출력함)
  List<SheetDTO> getSheets(Long uno, int pageNo, int limit, String search);

  Long countSheets(String search, Long uno);

  // 악보 카운터
  int selectListAllCount();

  // 악보 삽입
  int insertSheet(SheetDTO sheetDTO);

  // 악보 수정
  int updateSheet(SheetDTO sheetDTO);

  // 악보 삭제
  int deleteSheet(Long sno);

  // 악보 DB 삭제 전 파일 있는지 유효성 검사 후 파일 삭제를 위한 조회
  SheetDTO selectSheetFilePathById(Long sno);

}
