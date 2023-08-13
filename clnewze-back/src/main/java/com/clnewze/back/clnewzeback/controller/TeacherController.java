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

import com.clnewze.back.clnewzeback.entity.dao.Teacher;
import com.clnewze.back.clnewzeback.entity.dao.TeacherMenuCategory;
import com.clnewze.back.clnewzeback.entity.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.FileService;
import com.clnewze.back.clnewzeback.service.TeacherService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/teacher")
public class TeacherController {

  @Autowired
  TeacherService teacherService;

  @Autowired
  FileService fileService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<Teacher>>> selectList(
      @RequestParam(required = false) String major) {

    List<Teacher> result = teacherService.selectList(major);
    ResponseObject<List<Teacher>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  /**
   * 
   * @return 레스너 찾기 카테고리 출력 관련 메소드
   */
  @GetMapping("/master/menu/category")
  public ResponseEntity<ResponseObject<List<TeacherMenuCategory>>> category() {
    log.info("controller : SheetMusicMenu : category() 호출 성공");
    List<TeacherMenuCategory> result = teacherService.category();
    ResponseObject<List<TeacherMenuCategory>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("/master/menu/table/count")
  public Long categoryCountTeacherMenu() {
    log.info("controller : SheetMusicMenu : categoryCountTeacherMenu() 호출 성공");
    Long result = teacherService.categoryCountTeacherMenu();
    return result;
  }

  @PostMapping("/master/menu/create")
  public Integer createTeacherMenu(@RequestBody TeacherMenuCategory teacherMenuCategory) {
    log.info("controller : SheetMusicMenu : createTeacherMenu() 호출 성공");
    Integer createSuccess = teacherService.createTeacherMenu(teacherMenuCategory.getName(),
        teacherMenuCategory.getCategory());
    Long count = teacherService.categoryCountTeacherMenu();
    TeacherMenuCategory lastTeacherMenuTable = teacherService.lastTeacherMenuTable();
    teacherService.orderbyChangeTeacherMenu(lastTeacherMenuTable.getMtno(), count);
    return createSuccess;
  };

  @PostMapping("/master/menu/change/orderby")
  public Integer orderbyChangeTeacherMenu(@RequestBody TeacherMenuCategory teacherMenuCategory) {
    log.info("controller : SheetMusicMenu : orderbyChangeTeacherMenu() 호출 성공");
    return teacherService.orderbyChangeTeacherMenu(teacherMenuCategory.getMtno(),
        teacherMenuCategory.getOrderby());
  }

  @PostMapping("/master/menu/update")
  public Integer updateTeacherMenu(@RequestBody TeacherMenuCategory teacherMenuCategory) {
    log.info("controller : SheetMusicMenu : updateTeacherMenu() 호출 성공");
    return teacherService.updateTeacherMenu(teacherMenuCategory.getMtno(), teacherMenuCategory.getName(),
        teacherMenuCategory.getCategory());
  }

  @PostMapping("/master/menu/delete")
  public Integer deleteTeacherMenu(@RequestBody TeacherMenuCategory teacherMenuCategory) {
    log.info("controller : SheetMusicMenu : deleteTeacherMenu() 호출 성공");
    return teacherService.deleteTeacherMenu(teacherMenuCategory.getMtno());
  }

}
