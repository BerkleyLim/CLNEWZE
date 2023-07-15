package com.clnewze.back.clnewzeback.controller;

import java.io.IOException;
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

import com.clnewze.back.clnewzeback.domain.SheetMusic;
import com.clnewze.back.clnewzeback.domain.SheetMusicMenuCategory;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.FileService;
import com.clnewze.back.clnewzeback.service.SheetMusicService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/sheetmusic")
public class SheetMusicController {

  @Autowired
  SheetMusicService sheetMusicService;

  @Autowired
  FileService fileService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<SheetMusic>>> selectList(
      @RequestParam(required = false) String genre) {

    List<SheetMusic> result = sheetMusicService.selectList(genre);
    ResponseObject<List<SheetMusic>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("/converttest")
  public void convertTest() throws IOException {
    fileService.convertTest();
  }

  /**
   * 
   * @return 레스너 찾기 카테고리 출력 관련 메소드
   */
  @GetMapping("/master/menu/category")
  public ResponseEntity<ResponseObject<List<SheetMusicMenuCategory>>> category() {
    log.info("controller : SheetMusicMenu : category() 호출 성공");
    List<SheetMusicMenuCategory> result = sheetMusicService.category();
    ResponseObject<List<SheetMusicMenuCategory>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("/master/menu/table/count")
  public Long categoryCountSheetMusicMenu() {
    log.info("controller : SheetMusicMenu : categoryCountSheetMusicMenu() 호출 성공");
    Long result = sheetMusicService.categoryCountSheetMusicMenu();
    return result;
  }

  @PostMapping("/master/menu/create")
  public Integer createSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : create Sheet music MusicMenu() 호출 성공");
    Integer createSuccess = sheetMusicService.createSheetMusicMenu(sheetMusicMenuCategory.getName(),
        sheetMusicMenuCategory.getCategory());
    Long count = sheetMusicService.categoryCountSheetMusicMenu();
    SheetMusicMenuCategory lastSheetMusicMenuTable = sheetMusicService.lastSheetMusicMenuTable();
    sheetMusicService.orderbyChangeSheetMusicMenu(lastSheetMusicMenuTable.getSmtno(), count);
    return createSuccess;
  };

  @PostMapping("/master/menu/change/orderby")
  public Integer orderbyChangeSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : orderbyChangeMusicMenu() 호출 성공");
    return sheetMusicService.orderbyChangeSheetMusicMenu(sheetMusicMenuCategory.getSmtno(),
        sheetMusicMenuCategory.getOrderby());
  }

  @PostMapping("/master/menu/update")
  public Integer updateSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : updateSheetMusicMenu() 호출 성공");
    return sheetMusicService.updateSheetMusicMenu(sheetMusicMenuCategory.getSmtno(), sheetMusicMenuCategory.getName(),
        sheetMusicMenuCategory.getCategory());
  }

  @PostMapping("/master/menu/delete")
  public Integer deleteSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : deleteSheetMusicMenu() 호출 성공");
    return sheetMusicService.deleteSheetMusicMenu(sheetMusicMenuCategory.getSmtno());
  }

}
