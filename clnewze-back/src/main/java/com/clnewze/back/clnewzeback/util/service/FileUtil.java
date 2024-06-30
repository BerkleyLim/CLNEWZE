package com.clnewze.back.clnewzeback.util.service;

import lombok.extern.log4j.Log4j2;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.springframework.core.env.Environment;
import org.springframework.util.ResourceUtils;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Log4j2
public class FileUtil {
//    private static final String BASE_UPLOAD_DIR = "C:/path/to/upload/dir"; // 실제 경로로 변경

    private static String BASE_UPLOAD_DIR;

    // Environment를 이용해서 프로파일에 따라 경로를 설정합니다.
    public FileUtil(Environment env) throws FileNotFoundException {
        String activeProfile = env.getActiveProfiles()[0];
        log.info("Environment : " + activeProfile);
        if ("prod".equals(activeProfile)) {
//            BASE_UPLOAD_DIR = "/opt/clnewze/"; // 실제 경로로 변경
            BASE_UPLOAD_DIR = "/home/ec2-user/clnewze/temp-file/"; // 임시 파일 저장소 변경
        } else {
            BASE_UPLOAD_DIR = ResourceUtils.getFile("classpath:static/sample/file").getAbsolutePath();
        }
    }

    // 파일 서비스 로직 구현 (테스트용 파일)
    // 기존 static.sample.static.sample.Glinka-Balakirev_-_The_Lark.pdf 파일을 먼저 읽고
    // jpg 파일 출력
    // 참조 : https://ohmyfun.tistory.com/m/381
    // 참조2 :
    // https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=bb_&logNo=221329660551
    public static void convertTest() throws IOException {
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


    /**
     * (1) pdf 파일 저장
     * @param pdfInputStream pdf 파일
     * @return
     * @throws IOException
     */
    public String savePdf(InputStream pdfInputStream) throws IOException {
        Path uploadDir = getUploadDir();

        // 디렉토리가 없으면 생성
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        // 파일 저장 경로 설정
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        String pdfFileName = "uploaded_" + timestamp + ".pdf";
        Path pdfFilePath = uploadDir.resolve(pdfFileName);

        // PDF 파일 저장
        Files.copy(pdfInputStream, pdfFilePath, StandardCopyOption.REPLACE_EXISTING);

        return pdfFilePath.toString();
    }

    /**
     * (2) pdf 파일 -> 첫번째 페이지 image화
     * @param pdfFilePath pdf 파일
     * @return
     * @throws IOException
     */
    public String convertPdfToImage(String pdfFilePath) throws IOException {
        Path uploadDir = getUploadDir();

        // 디렉토리가 없으면 생성
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        File pdfFile = new File(pdfFilePath);
        try (PDDocument document = PDDocument.load(pdfFile)) {
            // PDF 첫 페이지를 이미지로 변환
            PDFRenderer pdfRenderer = new PDFRenderer(document);
            BufferedImage image = pdfRenderer.renderImageWithDPI(0, 100, ImageType.RGB);

            // 이미지 파일 저장 경로 설정
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
            String previewFileName = "preview_" + timestamp + ".jpg";
            Path previewFilePath = uploadDir.resolve(previewFileName);
            ImageIO.write(image, "jpg", previewFilePath.toFile());

            return previewFilePath.toString();
        }
    }

    /**
     * (3) 이미지 파일 저장
     * @param imageInputStream 이미지 파일
     * @return 저장된 이미지 파일의 경로
     * @throws IOException
     */
    public String saveImage(InputStream imageInputStream) throws IOException {
        Path uploadDir = getUploadDir();

        // 디렉토리가 없으면 생성
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        // 파일 저장 경로 설정
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        String imageFileName = "uploaded_image_" + timestamp + ".jpg";
        Path imageFilePath = uploadDir.resolve(imageFileName);

        // 이미지 파일 저장
        Files.copy(imageInputStream, imageFilePath, StandardCopyOption.REPLACE_EXISTING);

        return imageFilePath.toString();
    }

    /**
     * (4) 이미지 파일 경로 추출
     * @param imageName 이미지 파일 이름
     * @return 이미지 파일의 전체 경로
     * @throws IOException
     */
    public String getImagePath(String imageName) throws IOException {
        Path uploadDir = getUploadDir();
        return uploadDir.resolve(imageName).toString();
    }

    // 파일 삭제 메소드 추가
    public boolean deleteFile(String filePath) {
        try {
            File file = new File(filePath);
            if (file.exists()) {
                return file.delete();
            }
        } catch (Exception e) {
            log.error("Failed to delete file: " + filePath, e);
        }
        return false;
    }

    private Path getUploadDir() throws IOException {
        return Paths.get(BASE_UPLOAD_DIR);
    }
}
