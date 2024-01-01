package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.entity.SheetMusic;

@Repository
@Mapper
public interface SheetMusicMapper {
  // 전체 악보 리스트 출력 (조건 : genre, uno 값이 존재하면 해당 값만 출력함)
  public List<SheetMusic> selectList(String genre, Long uno, int pageNo, int limit);

  // 악보 카운터
  public int selectListAllCount();

  // 악보 삽입
  public int insertSheetMusic(SheetMusic sheetMusic);

  // 악보 수정
  public int updateSheetMusic(SheetMusic sheetMusic);

  // 악보 삭제
  public int deleteSheetMusic(SheetMusic sheetMusic);
}
