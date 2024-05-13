package com.clnewze.back.clnewzeback.information.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Information {
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
