package com.clnewze.back.clnewzeback.domain.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class InformationDto {
  Integer ino;
  String artist;
  String title;
  String img;
  String genre;
  Integer viewNumber;
  String releaseDate;
  String contents;
  String albumName;
  LocalDate upLoadDate;
  String userName;
  String musicLink;
}
