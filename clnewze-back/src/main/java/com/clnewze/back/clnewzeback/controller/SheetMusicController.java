package com.clnewze.back.clnewzeback.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.entity.SheetMusic;
import com.clnewze.back.clnewzeback.domain.entity.SheetMusicMenuCategory;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.FileService;
import com.clnewze.back.clnewzeback.service.SheetMusicService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@RequestMapping("/api/sheetmusic")
@AllArgsConstructor
public class SheetMusicController {
  private SheetMusicService sheetMusicService;
  private FileService fileService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<SheetMusic>>> selectList(
      @RequestParam(required = false) String genre,
      @RequestParam int pageNo,
      @RequestParam int limit) {

    List<SheetMusic> result = sheetMusicService.selectList(genre, pageNo, limit);
    ResponseObject<List<SheetMusic>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 악보 카운터
  @GetMapping("selectListAllCount")
  public ResponseEntity<ResponseObject<Integer>> selectListAllCount() {
    Integer result = sheetMusicService.selectListAllCount();
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 특정 유저만 악보 리스트 출력
  @GetMapping("selectListUserSheetMusic")
  public ResponseEntity<ResponseObject<List<SheetMusic>>> selectListUserSheetMusic(
      @RequestParam(required = false) String genre,
      @RequestParam Long uno,
      @RequestParam int pageNo,
      @RequestParam int limit) {
    List<SheetMusic> result = sheetMusicService.selectList(genre, pageNo, limit);
    ResponseObject<List<SheetMusic>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 악보 삽입
  @PostMapping("insertSheetMusic")
  public ResponseEntity<ResponseObject<Integer>> insertSheetMusic(SheetMusic sheetMusic) {
    Integer result = sheetMusicService.insertSheetMusic(sheetMusic);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 악보 수정
  @PostMapping("updateSheetMusic")
  public ResponseEntity<ResponseObject<Integer>> updateSheetMusic(SheetMusic sheetMusic) {
    Integer result = sheetMusicService.updateSheetMusic(sheetMusic);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 악보 삭제
  @PostMapping("deleteSheetMusic")
  public ResponseEntity<ResponseObject<Integer>> deleteSheetMusic(SheetMusic sheetMusic) {
    Integer result = sheetMusicService.deleteSheetMusic(sheetMusic);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // pdf 파일을 미리보기 형식으로 이미지 테스트 작업 진행
  // 현재는 이 메서드를 몰라도 무방하다.
  @GetMapping("/converttest")
  public void convertTest() throws IOException {
    fileService.convertTest();
  }

  /**
   *
   * @return 레스너 찾기 카테고리 출력 관련 메소드
   */
  // 장르 선택 메뉴를 집어넣는 악보 카테고리 리스트 출력 - 전체 사용자 권한 부여
  @GetMapping("/master/menu/category")
  public ResponseEntity<ResponseObject<List<SheetMusicMenuCategory>>> category() {
    log.info("controller : SheetMusicMenu : category() 호출 성공");
    List<SheetMusicMenuCategory> result = sheetMusicService.category();
    ResponseObject<List<SheetMusicMenuCategory>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 무시해도 됨
  @GetMapping("/master/menu/table/count")
  public Long categoryCountSheetMusicMenu() {
    log.info("controller : SheetMusicMenu : categoryCountSheetMusicMenu() 호출 성공");
    Long result = sheetMusicService.categoryCountSheetMusicMenu();
    return result;
  }

  // 장르 리스트 추가 - 관리자 권한만 부여
  @PostMapping("/master/menu/create")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer createSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : create Sheet music MusicMenu() 호출 성공");
    Integer createSuccess = sheetMusicService.createSheetMusicMenu(sheetMusicMenuCategory.getName(),
        sheetMusicMenuCategory.getCategory());
    Long count = sheetMusicService.categoryCountSheetMusicMenu();
    SheetMusicMenuCategory lastSheetMusicMenuTable = sheetMusicService.lastSheetMusicMenuTable();
    sheetMusicService.orderbyChangeSheetMusicMenu(lastSheetMusicMenuTable.getSmtno(), count);
    return createSuccess;
  };

  // 장르 리스트 표시 순서 변경 - 관리자 권한만 부여
  @PostMapping("/master/menu/change/orderby")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer orderbyChangeSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : orderbyChangeMusicMenu() 호출 성공");
    return sheetMusicService.orderbyChangeSheetMusicMenu(sheetMusicMenuCategory.getSmtno(),
        sheetMusicMenuCategory.getOrderby());
  }

  // 장르 리스트 중 카테고리 내용 변경 - 관리자 권한만 부여
  @PostMapping("/master/menu/update")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer updateSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : updateSheetMusicMenu() 호출 성공");
    return sheetMusicService.updateSheetMusicMenu(sheetMusicMenuCategory.getSmtno(), sheetMusicMenuCategory.getName(),
        sheetMusicMenuCategory.getCategory());
  }

  // 장르 리스트 중 필요없는 장리 제거 - 관리자 권한만 부여
  @PostMapping("/master/menu/delete")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer deleteSheetMusicMenu(@RequestBody SheetMusicMenuCategory sheetMusicMenuCategory) {
    log.info("controller : SheetMusicMenu : deleteSheetMusicMenu() 호출 성공");
    return sheetMusicService.deleteSheetMusicMenu(sheetMusicMenuCategory.getSmtno());
  }

}
