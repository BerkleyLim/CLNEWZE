package com.clnewze.back.clnewzeback.subscript;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.subscript.dto.SubScriptMeList;
import com.clnewze.back.clnewzeback.subscript.dto.SubScriptMyList;

@Repository
@Mapper
public interface SubScriptMapper {
  // 1) 내가 구독한 사람 리스트 조회
  public List<SubScriptMyList> selectSubScriptMyList(Long uno);

  // 2) 나를 구독한 사람 리스트 조회
  public List<SubScriptMeList> selectSubScriptMeList(Long uno);
}
