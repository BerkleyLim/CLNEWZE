package com.clnewze.back.clnewzeback.sheet.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.time.LocalDate;
import java.time.Year;
import java.time.ZonedDateTime;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SheetDTO {
    private Long sno;   // 악보 인덱스 번호
    private String artist; // 작곡가/가수명
    private String title; // 제목
    private String img; // 악보 미리보기 링크
    private String genre; // 장르 구분
    private Long viewNumber; // 조회수
    private Year releaseDate; // 발매년도
    private String contents; // 글 내용
    private String albumName; // 앨범 명
    private ZonedDateTime uploadDate; // 글생성 업로드 날짜
    private String userName; // 유저명
    private String nickName; // 닉네임
    private String musicLink; // 링크
    private String sheetFile; // 악보 파일(pdf 명)
    private Long uno; // 회원 인덱스 번호
}
