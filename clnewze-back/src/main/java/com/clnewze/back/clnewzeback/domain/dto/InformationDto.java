package com.clnewze.back.clnewzeback.domain.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class InformationDto {
  private Integer ino;
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
}
