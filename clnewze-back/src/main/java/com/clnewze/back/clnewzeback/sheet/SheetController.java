package com.clnewze.back.clnewzeback.sheet;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.clnewze.back.clnewzeback.configuration.RequireRole;
import com.clnewze.back.clnewzeback.sheet.vo.SheetVO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.clnewze.back.clnewzeback.sheet.dto.SheetDTO;
import com.clnewze.back.clnewzeback.sheet.dto.SheetMenuCategoryDTO;
import com.clnewze.back.clnewzeback.util.model.ResponseObject;
import com.clnewze.back.clnewzeback.util.service.FileUtil;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;

@RestController
@Log4j2
@RequestMapping("/api/sheet")
@AllArgsConstructor
public class SheetController {
  private SheetService sheetService;

  /**
   * (1) 악보 리스트 검색
   * @param uno 유저번호 (default : -1 , 일때 uno 무시 검색)
   * @param search 검색 키
   * @param page 시작 페이지
   * @param limit 페이지 사이즈
   * @return
   */
  @GetMapping
  public ResponseEntity<ResponseObject<Map>> getSheets(
      @RequestParam(required = false, defaultValue = "-1") Long uno,
      @RequestParam(defaultValue = "") String search,
      @RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "10") int limit) {

    List<SheetDTO> sheetDTOS = sheetService.getSheets(uno, page, limit, search);
    long total = sheetService.getSheetCount(search, uno);
    SheetVO sheetVO = new SheetVO(sheetDTOS, total);
    Integer pageTotal = sheetService.selectListAllCount();
    Integer pageElement = pageTotal / 10;

    // 최종 결과 값 보내기
    Map result = new HashMap();
    result.put("data", sheetVO);
    result.put("pageTotal", pageTotal);
    result.put("pageElement", (pageElement+1));

    ResponseObject<Map> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 악보 카운터
  @GetMapping("selectListAllCount")
  public ResponseEntity<ResponseObject<Integer>> selectListAllCount() {
    Integer result = sheetService.selectListAllCount();
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }


  /**
   * (3) 악보 삽입하는거, 미리보기 이미지 전환 + pdf 파일 저장
   * @param pdfFile 악보 pdf
   * @param sheetDTO 악보 생성
   * @return
   * @throws IOException
   */
  @PostMapping
  public ResponseEntity<ResponseObject<Integer>> insertSheet(
          @Valid @RequestPart(value = "file", required = false) MultipartFile pdfFile,
          @RequestPart("sheetDTO") SheetDTO sheetDTO) throws IOException {
//    log.info(pdfFile);
//    log.info(sheetDTO);
//    Integer result = 1;
    Integer result = sheetService.insertSheet(pdfFile, sheetDTO);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  /**
   * (3) 악보 수정하는거, 미리보기 이미지 전환 + pdf 파일 저장
   * @param pdfFile 악보 pdf
   * @param sheetDTO 악보 생성
   * @return
   * @throws IOException
   */
  @PutMapping
  public ResponseEntity<ResponseObject<Integer>> updateSheet(
          @Valid @RequestPart(value = "file", required = false) MultipartFile pdfFile,
          @RequestPart("sheetDTO") SheetDTO sheetDTO) throws IOException {
    Integer result = sheetService.updateSheet(pdfFile, sheetDTO);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  /**
   * 악보 삭제 - 삭제할 파일도 같이 삭제함
   * @param sno 삭제할 인덱스 번호
   * @return
   * @throws FileNotFoundException
   */
  @DeleteMapping
  public ResponseEntity<ResponseObject<Integer>> deleteSheet(
          @RequestParam("sno") Long sno
  ) throws FileNotFoundException {
    Integer result = sheetService.deleteSheet(sno);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // pdf 파일을 미리보기 형식으로 이미지 테스트 작업 진행
  // 현재는 이 메서드를 몰라도 무방하다.
  @GetMapping("/converttest")
  public void convertTest() throws IOException {
    FileUtil.convertTest();
  }

  /**
   *
   * @return 레스너 찾기 카테고리 출력 관련 메소드
   */
  // 장르 선택 메뉴를 집어넣는 악보 카테고리 리스트 출력 - 전체 사용자 권한 부여
  @GetMapping("/master/menu/category")
  public ResponseEntity<ResponseObject<List<SheetMenuCategoryDTO>>> category() {
    log.info("controller : SheetMenu : category() 호출 성공");
    List<SheetMenuCategoryDTO> result = sheetService.category();
    ResponseObject<List<SheetMenuCategoryDTO>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 무시해도 됨
  @GetMapping("/master/menu/table/count")
  public Long categoryCountSheetMenu() {
    log.info("controller : SheetMenu : categoryCountSheetMenu() 호출 성공");
    Long result = sheetService.categoryCountSheetMenu();
    return result;
  }

  // 장르 리스트 추가 - 관리자 권한만 부여
  @PostMapping("/master/menu/create")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer createSheetMenu(@RequestBody SheetMenuCategoryDTO sheetMenuCategoryDTO) {
    log.info("controller : SheetMenu : create Sheet music MusicMenu() 호출 성공");
    Integer createSuccess = sheetService.createSheetMenu(sheetMenuCategoryDTO.getName(),
        sheetMenuCategoryDTO.getCategory());
    Long count = sheetService.categoryCountSheetMenu();
    SheetMenuCategoryDTO lastSheetMenuTable = sheetService.lastSheetMenuTable();
    sheetService.orderbyChangeSheetMenu(lastSheetMenuTable.getSmtno(), count);
    return createSuccess;
  };

  // 장르 리스트 표시 순서 변경 - 관리자 권한만 부여
  @PostMapping("/master/menu/change/orderby")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer orderbyChangeSheetMenu(@RequestBody SheetMenuCategoryDTO sheetMenuCategoryDTO) {
    log.info("controller : SheetMenu : orderbyChangeMusicMenu() 호출 성공");
    return sheetService.orderbyChangeSheetMenu(sheetMenuCategoryDTO.getSmtno(),
        sheetMenuCategoryDTO.getOrderby());
  }

  // 장르 리스트 중 카테고리 내용 변경 - 관리자 권한만 부여
  @PostMapping("/master/menu/update")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer updateSheetMenu(@RequestBody SheetMenuCategoryDTO sheetMenuCategoryDTO) {
    log.info("controller : SheetMenu : updateSheetMenu() 호출 성공");
    return sheetService.updateSheetMenu(sheetMenuCategoryDTO.getSmtno(), sheetMenuCategoryDTO.getName(),
        sheetMenuCategoryDTO.getCategory());
  }

  // 장르 리스트 중 필요없는 장리 제거 - 관리자 권한만 부여
  @PostMapping("/master/menu/delete")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer deleteSheetMenu(@RequestBody SheetMenuCategoryDTO sheetMenuCategoryDTO) {
    log.info("controller : SheetMenu : deleteSheetMenu() 호출 성공");
    return sheetService.deleteSheetMenu(sheetMenuCategoryDTO.getSmtno());
  }

}
