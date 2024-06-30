package com.clnewze.back.clnewzeback.room;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import com.clnewze.back.clnewzeback.util.service.FileUtil;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.room.dto.RoomDTO;
import com.clnewze.back.clnewzeback.room.dto.RoomMenuCategoryDTO;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;

@Service
@Log4j2
@AllArgsConstructor
public class RoomService {
  private RoomMapper roomMapper;
  private RoomMenuCategoryMapper roomMenuCategoryMapper;
  private Environment env;
//  private static final String UPLOAD_DIR = "C:/path/to/upload/dir"; // 실제 경로로 변경


  /**
   * (1) 전체 연습실 출력 (10페이지 단위, uno가 존재 시 그 조건에 맞게 출력함)
   * @param uno : 회원번호(선택)
   * @param pageNo : 시작 페이지
   * @param limit : 페이지 단위
   * @param search : 검색어
   * @return : 전체 리스트 출력, 해당 리스트의 따라 출력함
   */
  public List<RoomDTO> getRooms(Long uno, int pageNo, int limit, String search) {
    pageNo = pageNo * limit;
    return roomMapper.getRooms(uno, pageNo, limit, search);
  }

  /**
   * 검색 갯수
   * @param search : 검색어
   * @return : 검색 결과 반환
   */
  public Long getRoomCount(String search, Long uno) {
    return roomMapper.countRooms(search, uno);
  }

  /**
   * 연습실 전체 갯수 보기
   * @return
   */
  public int selectListAllCount() {
    return roomMapper.selectListAllCount();
  }

  /**
   * 연습실 삽입 메소드
   * @param imgFile 연습실 img 파일 (반드시 img로만 받을것)
   * @param roomDTO DB에 넣을 파라미터
   * @return
   * @throws IOException
   */
  public int insertRoom(MultipartFile imgFile, RoomDTO roomDTO) throws IOException {
    FileUtil fileUtil = new FileUtil(env);

    // 아래는 파일이 유효해야 수행한다.
    if (imgFile != null && !imgFile.isEmpty()) {
      // PDF 파일 저장
      String imgFilePath = fileUtil.saveImage(imgFile.getInputStream());

      // PDF를 이미지로 변환하여 저장
      String previewImagePath = fileUtil.convertPdfToImage(imgFilePath);

      roomDTO.setImg(previewImagePath);
    }

    return roomMapper.insertRoom(roomDTO);
  }

  /**
   * 연습실 수정 메소드, 만일 파일 교체 시 기존 파일 삭제 후 새로 파일 축라
   * @param imgFile 연습실 pdf 파일 (반드시 pdf로만 받을것)
   * @param roomDTO DB에 넣을 파라미터
   * @return
   * @throws IOException
   */
  public int updateRoom(MultipartFile imgFile, RoomDTO roomDTO) throws IOException {
    FileUtil fileUtil = new FileUtil(env);

    // 새로운 PDF 파일이 있는 경우에만 기존 파일 삭제 및 새 파일 저장
    if (imgFile != null && !imgFile.isEmpty()) {
      // 기존 파일 삭제
      String existingImgFilePath = roomDTO.getImg();

      if (existingImgFilePath != null && !existingImgFilePath.isEmpty()) {
        boolean imgDeleted = fileUtil.deleteFile(existingImgFilePath);
        log.info("Image file deleted: " + imgDeleted);
      }

      // 새로운 PDF 파일 저장
      String imgFilePath = fileUtil.saveImage(imgFile.getInputStream());

      // DTO에 새로운 파일 경로 설정
      roomDTO.setImg(imgFilePath);
    }

    return roomMapper.updateRoom(roomDTO);
  }

  /**
   * 연습실 삭제 기능 추가, DB상 등록되어 있는 파일 경로의 따라 삭제함
   * @param rno
   * @return
   * @throws FileNotFoundException
   */
  public Integer deleteRoom(Long rno) throws FileNotFoundException {
    RoomDTO roomDTO = roomMapper.selectRoomFilePathById(rno);
    // 삭제 전 미리 작업 진행
    // 이것은 파일 부터 먼저 삭제한다.
    if (roomDTO != null) {
      FileUtil fileUtil = new FileUtil(env);
      String existingImgFilePath = roomDTO.getImg();
      if (existingImgFilePath != null && !existingImgFilePath.isEmpty()) {
        fileUtil.deleteFile(existingImgFilePath);
      }
    }
    // 이후 DB 삭제
    return roomMapper.deleteRoom(rno);
  }

  // 여기서부터 메뉴 관리
  public List<RoomMenuCategoryDTO> category() {
    log.info("Service : RoomMenu : category() 호출 성공");
    return roomMenuCategoryMapper.category();
  }

  // 마지막 행 테이블 출력 (생성시 orderby 지정용으로)
  public RoomMenuCategoryDTO lastRoomMenuTable() {
    return roomMenuCategoryMapper.lastRoomMenuTable();
  }

  public Long categoryCountRoomMenu() {
    log.info("Service : RoomMenu : categoryCount() 호출 성공");
    return roomMenuCategoryMapper.categoryCountRoomMenu();
  }

  public Integer createRoomMenu(String name, String category) {
    log.info("Service : RoomMenu : create() 호출 성공");
    return roomMenuCategoryMapper.createRoomMenu(name, category);
  };

  public Integer orderbyChangeRoomMenu(Long rtno, Long changeOrder) {
    log.info("Service : RoomMenu : orderby Change() 호출 성공");
    return roomMenuCategoryMapper.orderbyChangeRoomMenu(rtno, changeOrder);
  }

  public Integer updateRoomMenu(Long rtno, String name, String category) {
    log.info("Service : RoomMenu : update() 호출 성공");
    return roomMenuCategoryMapper.updateRoomMenu(rtno, name,
            category);
  }

  public Integer deleteRoomMenu(Long rtno) {
    log.info("Service : RoomMenu : delete() 호출 성공");
    return roomMenuCategoryMapper.deleteRoomMenu(rtno);
  }

}
