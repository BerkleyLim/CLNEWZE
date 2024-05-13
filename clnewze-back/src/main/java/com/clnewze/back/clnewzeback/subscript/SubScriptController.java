package com.clnewze.back.clnewzeback.subscript;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.subscript.dto.SubScriptMeList;
import com.clnewze.back.clnewzeback.subscript.dto.SubScriptMyList;
import com.clnewze.back.clnewzeback.util.model.ResponseObject;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@AllArgsConstructor
@RequestMapping("/api/subscript")
public class SubScriptController {
  private SubScriptService subScriptService;

  // 1) 내가 구독한 사람 리스트 조회 API
  @GetMapping("/select/sub/script/my/list")
  public ResponseEntity<ResponseObject<List<SubScriptMyList>>> selectSubScriptMyList(
      @RequestParam Long uno) {
    log.info("controller : SelectSubScriptMyList : SelectSubScriptMyList() 호출 성공");
    List<SubScriptMyList> result = subScriptService.selectSubScriptMyList(uno);
    ResponseObject<List<SubScriptMyList>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 2) 나를 구독한 사람 리스트 조회 API
  @GetMapping("/select/sub/script/me/list")
  public ResponseEntity<ResponseObject<List<SubScriptMeList>>> selectSubScriptMeList(
      @RequestParam Long uno) {
    log.info("controller : SelectSubScriptMeList : SelectSubScriptMeList() 호출 성공");
    List<SubScriptMeList> result = subScriptService.selectSubScriptMeList(uno);
    ResponseObject<List<SubScriptMeList>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }
}
