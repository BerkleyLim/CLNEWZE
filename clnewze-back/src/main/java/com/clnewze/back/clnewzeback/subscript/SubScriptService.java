package com.clnewze.back.clnewzeback.subscript;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.subscript.dto.SubScriptMeList;
import com.clnewze.back.clnewzeback.subscript.dto.SubScriptMyList;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@AllArgsConstructor
public class SubScriptService {
  private SubScriptMapper subScriptMapper;

  // 1) 내가 구독한 사람 리스트 조회
  public List<SubScriptMyList> selectSubScriptMyList(Long uno) {
    log.info("Service : SelectSubScriptMyList(uno=" + uno + ") 호출 성공");
    return subScriptMapper.selectSubScriptMyList(uno);
  }

  // 2) 나를 구독한 사람 리스트 조회
  public List<SubScriptMeList> selectSubScriptMeList(Long uno) {
    log.info("Service : SelectSubScriptMeList(uno=" + uno + ") 호출 성공");
    return subScriptMapper.selectSubScriptMeList(uno);
  }
}
