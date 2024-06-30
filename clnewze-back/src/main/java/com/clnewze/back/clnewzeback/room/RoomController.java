package com.clnewze.back.clnewzeback.room;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.clnewze.back.clnewzeback.configuration.RequireRole;
import com.clnewze.back.clnewzeback.room.vo.RoomVO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.clnewze.back.clnewzeback.room.dto.RoomDTO;
import com.clnewze.back.clnewzeback.room.dto.RoomMenuCategoryDTO;
import com.clnewze.back.clnewzeback.util.model.ResponseObject;
import com.clnewze.back.clnewzeback.util.service.FileUtil;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;

@RestController
@Log4j2
@RequestMapping("/api/room")
@AllArgsConstructor
public class RoomController {
  private RoomService roomService;

  /**
   * (1) 연습실 리스트 검색
   * @param uno 유저번호 (default : -1 , 일때 uno 무시 검색)
   * @param search 검색 키
   * @param page 시작 페이지
   * @param limit 페이지 사이즈
   * @return
   */
  @GetMapping
  public ResponseEntity<ResponseObject<Map>> getRooms(
          @RequestParam(required = false, defaultValue = "-1") Long uno,
          @RequestParam(defaultValue = "") String search,
          @RequestParam(defaultValue = "0") int page,
          @RequestParam(defaultValue = "10") int limit) {

    List<RoomDTO> roomDTOS = roomService.getRooms(uno, page, limit, search);
    long total = roomService.getRoomCount(search, uno);
    RoomVO roomVO = new RoomVO(roomDTOS, total);
    Integer pageTotal = roomService.selectListAllCount();
    Integer pageElement = pageTotal / 10;

    // 최종 결과 값 보내기
    Map result = new HashMap();
    result.put("data", roomVO);
    result.put("pageTotal", pageTotal);
    result.put("pageElement", (pageElement+1));

    ResponseObject<Map> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 연습실 카운터
  @GetMapping("selectListAllCount")
  public ResponseEntity<ResponseObject<Integer>> selectListAllCount() {
    Integer result = roomService.selectListAllCount();
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }


  /**
   * (3) 연습실 삽입하는거, 미리보기 이미지 전환 + pdf 파일 저장
   * @param imgFile 연습실 pdf
   * @param roomDTO 연습실 생성
   * @return
   * @throws IOException
   */
  @PostMapping
  public ResponseEntity<ResponseObject<Integer>> insertRoom(
          @Valid @RequestPart(value = "file", required = false) MultipartFile imgFile,
          @RequestPart("roomDTO") RoomDTO roomDTO) throws IOException {
//    log.info(imgFile);
//    log.info(roomDTO);
//    Integer result = 1;
    Integer result = roomService.insertRoom(imgFile, roomDTO);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  /**
   * (3) 연습실 수정하는거, 미리보기 이미지 전환 + pdf 파일 저장
   * @param imgFile 연습실 pdf
   * @param roomDTO 연습실 생성
   * @return
   * @throws IOException
   */
  @PutMapping
  public ResponseEntity<ResponseObject<Integer>> updateRoom(
          @Valid @RequestPart(value = "file", required = false) MultipartFile imgFile,
          @RequestPart("roomDTO") RoomDTO roomDTO) throws IOException {
    Integer result = roomService.updateRoom(imgFile, roomDTO);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  /**
   * 연습실 삭제 - 삭제할 파일도 같이 삭제함
   * @param rno 삭제할 인덱스 번호
   * @return
   * @throws FileNotFoundException
   */
  @DeleteMapping
  public ResponseEntity<ResponseObject<Integer>> deleteRoom(
          @RequestParam("rno") Long rno
  ) throws FileNotFoundException {
    Integer result = roomService.deleteRoom(rno);
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  /**
   *
   * @return 레스너 찾기 카테고리 출력 관련 메소드
   */
  // 장르 선택 메뉴를 집어넣는 연습실 카테고리 리스트 출력 - 전체 사용자 권한 부여
  @GetMapping("/master/menu/category")
  public ResponseEntity<ResponseObject<List<RoomMenuCategoryDTO>>> category() {
    log.info("controller : RoomMenu : category() 호출 성공");
    List<RoomMenuCategoryDTO> result = roomService.category();
    ResponseObject<List<RoomMenuCategoryDTO>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 무시해도 됨
  @GetMapping("/master/menu/table/count")
  public Long categoryCountRoomMenu() {
    log.info("controller : RoomMenu : categoryCountRoomMenu() 호출 성공");
    Long result = roomService.categoryCountRoomMenu();
    return result;
  }

  // 장르 리스트 추가 - 관리자 권한만 부여
  @PostMapping("/master/menu/create")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer createRoomMenu(@RequestBody RoomMenuCategoryDTO roomMenuCategoryDTO) {
    log.info("controller : RoomMenu : create Room music MusicMenu() 호출 성공");
    Integer createSuccess = roomService.createRoomMenu(roomMenuCategoryDTO.getName(),
            roomMenuCategoryDTO.getCategory());
    Long count = roomService.categoryCountRoomMenu();
    RoomMenuCategoryDTO lastRoomMenuTable = roomService.lastRoomMenuTable();
    roomService.orderbyChangeRoomMenu(lastRoomMenuTable.getRtno(), count);
    return createSuccess;
  };

  // 장르 리스트 표시 순서 변경 - 관리자 권한만 부여
  @PostMapping("/master/menu/change/orderby")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer orderbyChangeRoomMenu(@RequestBody RoomMenuCategoryDTO roomMenuCategoryDTO) {
    log.info("controller : RoomMenu : orderbyChangeMusicMenu() 호출 성공");
    return roomService.orderbyChangeRoomMenu(roomMenuCategoryDTO.getRtno(),
            roomMenuCategoryDTO.getOrderby());
  }

  // 장르 리스트 중 카테고리 내용 변경 - 관리자 권한만 부여
  @PostMapping("/master/menu/update")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer updateRoomMenu(@RequestBody RoomMenuCategoryDTO roomMenuCategoryDTO) {
    log.info("controller : RoomMenu : updateRoomMenu() 호출 성공");
    return roomService.updateRoomMenu(roomMenuCategoryDTO.getRtno(), roomMenuCategoryDTO.getName(),
            roomMenuCategoryDTO.getCategory());
  }

  // 장르 리스트 중 필요없는 장리 제거 - 관리자 권한만 부여
  @PostMapping("/master/menu/delete")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public Integer deleteRoomMenu(@RequestBody RoomMenuCategoryDTO roomMenuCategoryDTO) {
    log.info("controller : RoomMenu : deleteRoomMenu() 호출 성공");
    return roomService.deleteRoomMenu(roomMenuCategoryDTO.getRtno());
  }

}
