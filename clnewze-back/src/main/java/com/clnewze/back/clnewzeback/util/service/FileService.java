package com.clnewze.back.clnewzeback.util.service;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class FileService {

  // 파일 서비스 로직 구현 (테스트용 파일)
  // 기존 static.sample.static.sample.Glinka-Balakirev_-_The_Lark.pdf 파일을 먼저 읽고
  // jpg 파일 출력
  // 참조 : https://ohmyfun.tistory.com/m/381
  // 참조2 :
  // https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=bb_&logNo=221329660551
  public void convertTest() throws IOException {
    // 어떤 경로의 어떤 파일을 읽을것인지 설정하고 해당 파일객체 생성
    File file2 = new File(
        "C:/Users/user/git/CLNEWZE/clnewze-back/src/main/resources/static/sample/file/Glinka-Balakirev_-_The_Lark.pdf");
    try {
      PDDocument document = PDDocument.load(file2);// pdf문서 객체 생성
      // int pageCount = document.getNumberOfPages();// pdf의 페이지 수
      PDFRenderer pdfRenderer = new PDFRenderer(document);

      // 0 페이지를 JPG파일로 저장
      BufferedImage imageObj = pdfRenderer.renderImageWithDPI(0, 100, ImageType.RGB);
      File outputfile = new File("C:/Users/user/git/CLNEWZE/clnewze-back/src/main/resources/static/sample/image/"
          + System.currentTimeMillis() + ".jpg");
      ImageIO.write(imageObj, "jpg", outputfile);

      // 여러페이지 삽입
      // for (int i = 0; i < pageCount; i++) {
      // BufferedImage imageObj = pdfRenderer.renderImageWithDPI(i, 300,
      // ImageType.RGB);// pdf파일의 페이지를돌면서 이미지 파일 변환
      // File outputfile = new File(uploadPath + "/" + System.currentTimeMillis() +
      // "_" +
      // fb.getOriginalFilename().substring(0, fb.getOriginalFilename().length() - 4)
      // + ".jpg");// 파일이름
      // // 변경(.pdf->.jpg)

      // ImageIO.write(imageObj, "jpg", outputfile);// 변환한 파일 업로드
      // }

      if (document != null) {
        document.close();
      }
    } catch (IOException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  }
}
