package com.clnewze.back.clnewzeback.sheet;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import com.clnewze.back.clnewzeback.util.service.FileUtil;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.sheet.dto.SheetDTO;
import com.clnewze.back.clnewzeback.sheet.dto.SheetMenuCategoryDTO;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;

@Service
@Log4j2
@AllArgsConstructor
public class SheetService {
  private SheetMapper sheetMapper;
  private SheetMenuCategoryMapper sheetMenuCategoryMapper;
  private Environment env;
//  private static final String UPLOAD_DIR = "C:/path/to/upload/dir"; // 실제 경로로 변경


  /**
   * (1) 전체 악보 출력 (10페이지 단위, uno가 존재 시 그 조건에 맞게 출력함)
   * @param uno : 회원번호(선택)
   * @param pageNo : 시작 페이지
   * @param limit : 페이지 단위
   * @param search : 검색어
   * @return : 전체 리스트 출력, 해당 리스트의 따라 출력함
   */
  public List<SheetDTO> getSheets(Long uno, int pageNo, int limit, String search) {
    pageNo = pageNo * limit;
    return sheetMapper.getSheets(uno, pageNo, limit, search);
  }

  /**
   * 검색 갯수
   * @param search : 검색어
   * @return : 검색 결과 반환
   */
  public Long getSheetCount(String search, Long uno) {
    return sheetMapper.countSheets(search, uno);
  }

  /**
   * 악보 전체 갯수 보기
   * @return
   */
  public int selectListAllCount() {
    return sheetMapper.selectListAllCount();
  }

  /**
   * 악보 삽입 메소드
   * @param pdfFile 악보 pdf 파일 (반드시 pdf로만 받을것)
   * @param sheetDTO DB에 넣을 파라미터
   * @return
   * @throws IOException
   */
  public int insertSheet(MultipartFile pdfFile, SheetDTO sheetDTO) throws IOException {
    FileUtil fileUtil = new FileUtil(env);

    // 아래는 파일이 유효해야 수행한다.
    if (pdfFile != null && !pdfFile.isEmpty()) {
      // PDF 파일 저장
      String pdfFilePath = fileUtil.savePdf(pdfFile.getInputStream());

      // PDF를 이미지로 변환하여 저장
      String previewImagePath = fileUtil.convertPdfToImage(pdfFilePath);

      sheetDTO.setImg(previewImagePath);
      sheetDTO.setSheetFile(pdfFilePath);
    }

    return sheetMapper.insertSheet(sheetDTO);
  }

  /**
   * 악보 수정 메소드, 만일 파일 교체 시 기존 파일 삭제 후 새로 파일 축라
   * @param pdfFile 악보 pdf 파일 (반드시 pdf로만 받을것)
   * @param sheetDTO DB에 넣을 파라미터
   * @return
   * @throws IOException
   */
  public int updateSheet(MultipartFile pdfFile, SheetDTO sheetDTO) throws IOException {
    FileUtil fileUtil = new FileUtil(env);

    // 새로운 PDF 파일이 있는 경우에만 기존 파일 삭제 및 새 파일 저장
    if (pdfFile != null && !pdfFile.isEmpty()) {
      // 기존 파일 삭제
      String existingPdfFilePath = sheetDTO.getSheetFile();
      String existingImgFilePath = sheetDTO.getImg();

      if (existingPdfFilePath != null && !existingPdfFilePath.isEmpty()) {
        boolean pdfDeleted = fileUtil.deleteFile(existingPdfFilePath);
        log.info("PDF file deleted: " + pdfDeleted);
      }
      if (existingImgFilePath != null && !existingImgFilePath.isEmpty()) {
        boolean imgDeleted = fileUtil.deleteFile(existingImgFilePath);
        log.info("Image file deleted: " + imgDeleted);
      }

      // 새로운 PDF 파일 저장
      String pdfFilePath = fileUtil.savePdf(pdfFile.getInputStream());

      // PDF를 이미지로 변환하여 저장
      String previewImagePath = fileUtil.convertPdfToImage(pdfFilePath);

      // DTO에 새로운 파일 경로 설정
      sheetDTO.setImg(previewImagePath);
      sheetDTO.setSheetFile(pdfFilePath);
    }

    return sheetMapper.updateSheet(sheetDTO);
  }

  /**
   * 악보 삭제 기능 추가, DB상 등록되어 있는 파일 경로의 따라 삭제함
   * @param sno
   * @return
   * @throws FileNotFoundException
   */
  public Integer deleteSheet(Long sno) throws FileNotFoundException {
    SheetDTO sheetDTO = sheetMapper.selectSheetFilePathById(sno);
    // 삭제 전 미리 작업 진행
    // 이것은 파일 부터 먼저 삭제한다.
    if (sheetDTO != null) {
      FileUtil fileUtil = new FileUtil(env);
      String existingPdfFilePath = sheetDTO.getSheetFile();
      String existingImgFilePath = sheetDTO.getImg();
      if (existingPdfFilePath != null && !existingPdfFilePath.isEmpty()) {
        fileUtil.deleteFile(existingPdfFilePath);
      }
      if (existingImgFilePath != null && !existingImgFilePath.isEmpty()) {
        fileUtil.deleteFile(existingImgFilePath);
      }
    }
    // 이후 DB 삭제
    return sheetMapper.deleteSheet(sno);
  }

  // 여기서부터 메뉴 관리
  public List<SheetMenuCategoryDTO> category() {
    log.info("Service : SheetMenu : category() 호출 성공");
    return sheetMenuCategoryMapper.category();
  }

  // 마지막 행 테이블 출력 (생성시 orderby 지정용으로)
  public SheetMenuCategoryDTO lastSheetMenuTable() {
    return sheetMenuCategoryMapper.lastSheetMenuTable();
  }

  public Long categoryCountSheetMenu() {
    log.info("Service : SheetMenu : categoryCount() 호출 성공");
    return sheetMenuCategoryMapper.categoryCountSheetMenu();
  }

  public Integer createSheetMenu(String name, String category) {
    log.info("Service : SheetMenu : create() 호출 성공");
    return sheetMenuCategoryMapper.createSheetMenu(name, category);
  };

  public Integer orderbyChangeSheetMenu(Long smtno, Long changeOrder) {
    log.info("Service : SheetMenu : orderby Change() 호출 성공");
    return sheetMenuCategoryMapper.orderbyChangeSheetMenu(smtno, changeOrder);
  }

  public Integer updateSheetMenu(Long smtno, String name, String category) {
    log.info("Service : SheetMenu : update() 호출 성공");
    return sheetMenuCategoryMapper.updateSheetMenu(smtno, name,
        category);
  }

  public Integer deleteSheetMenu(Long smtno) {
    log.info("Service : SheetMenu : delete() 호출 성공");
    return sheetMenuCategoryMapper.deleteSheetMenu(smtno);
  }

}
