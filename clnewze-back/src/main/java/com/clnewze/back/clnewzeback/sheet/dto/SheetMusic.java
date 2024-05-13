package com.clnewze.back.clnewzeback.sheet.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SheetMusic {
  private Long sno;
  private String artist;
  private String title;
  private String img;
  private String genre;
  private Integer viewNumber;
  private String releaseDate;
  private String contents;
  private String albumName;
  private LocalDate upLoadDate;
  private String userName;
  private String musicLink;
  private String sheetFile;
  private Long uno;
}
