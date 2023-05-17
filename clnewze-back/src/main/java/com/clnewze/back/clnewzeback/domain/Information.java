package com.clnewze.back.clnewzeback.domain;

import java.time.LocalDate;

import lombok.Data;

@Data
public class Information {
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
