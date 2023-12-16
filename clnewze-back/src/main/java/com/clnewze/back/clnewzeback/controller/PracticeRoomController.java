package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.dto.PracticeRoom;
import com.clnewze.back.clnewzeback.domain.dto.PracticeRoomMenuCategory;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.FileService;
import com.clnewze.back.clnewzeback.service.PracticeRoomService;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/api/practiceroom")
@Log4j2
public class PracticeRoomController {

  @Autowired
  PracticeRoomService practiceRoomService;

  @Autowired
  FileService fileService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<PracticeRoom>>> selectList(
      @RequestParam(required = false) String categories,
      @RequestParam int pageNo,
      @RequestParam int limit) {

    List<PracticeRoom> result = practiceRoomService.selectList(categories, pageNo, limit);
    ResponseObject<List<PracticeRoom>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("selectListAllCount")
  public ResponseEntity<ResponseObject<Integer>> selectListAllCount() {
    Integer result = practiceRoomService.selectListAllCount();
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  /**
   * 
   * @return 레스너 찾기 카테고리 출력 관련 메소드
   */
  @GetMapping("/master/menu/category")
  public ResponseEntity<ResponseObject<List<PracticeRoomMenuCategory>>> category() {
    log.info("controller : PracticeRoomMenu : category() 호출 성공");
    List<PracticeRoomMenuCategory> result = practiceRoomService.category();
    ResponseObject<List<PracticeRoomMenuCategory>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("/master/menu/table/count")
  public Long categoryCountPracticeRoomMenu() {
    log.info("controller : PracticeRoomMenu : categoryCountPracticeRoomMenu() 호출 성공");
    Long result = practiceRoomService.categoryCountPracticeRoomMenu();
    return result;
  }

  @PostMapping("/master/menu/create")
  public Integer createPracticeRoomMenu(@RequestBody PracticeRoomMenuCategory practiceRoomMenuCategory) {
    log.info("controller : PracticeRoomMenu : create Sheet music MusicMenu() 호출 성공");
    Integer createSuccess = practiceRoomService.createPracticeRoomMenu(practiceRoomMenuCategory.getName(),
        practiceRoomMenuCategory.getCategory());
    Long count = practiceRoomService.categoryCountPracticeRoomMenu();
    PracticeRoomMenuCategory lastPracticeRoomMenuTable = practiceRoomService.lastPracticeRoomMenuTable();
    practiceRoomService.orderbyChangePracticeRoomMenu(lastPracticeRoomMenuTable.getPtno(), count);
    return createSuccess;
  };

  @PostMapping("/master/menu/change/orderby")
  public Integer orderbyChangePracticeRoomMenu(@RequestBody PracticeRoomMenuCategory practiceRoomMenuCategory) {
    log.info("controller : PracticeRoomMenu : orderbyChangeMusicMenu() 호출 성공");
    return practiceRoomService.orderbyChangePracticeRoomMenu(practiceRoomMenuCategory.getPtno(),
        practiceRoomMenuCategory.getOrderby());
  }

  @PostMapping("/master/menu/update")
  public Integer updatePracticeRoomMenu(@RequestBody PracticeRoomMenuCategory practiceRoomMenuCategory) {
    log.info("controller : PracticeRoomMenu : updatePracticeRoomMenu() 호출 성공");
    return practiceRoomService.updatePracticeRoomMenu(practiceRoomMenuCategory.getPtno(),
        practiceRoomMenuCategory.getName(),
        practiceRoomMenuCategory.getCategory());
  }

  @PostMapping("/master/menu/delete")
  public Integer deletePracticeRoomMenu(@RequestBody PracticeRoomMenuCategory practiceRoomMenuCategory) {
    log.info("controller : PracticeRoomMenu : deletePracticeRoomMenu() 호출 성공");
    return practiceRoomService.deletePracticeRoomMenu(practiceRoomMenuCategory.getPtno());
  }

}
