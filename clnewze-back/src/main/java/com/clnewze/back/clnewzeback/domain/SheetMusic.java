package com.clnewze.back.clnewzeback.domain;

import java.time.LocalDate;
import java.time.Year;

import lombok.Data;

@Data
public class SheetMusic {
  Integer ino;
  String artist;
  String title;
  String sheet;
  String genre;
  Integer viewNumber;
  Year releaseDate;
  String contents;
  String albumName;
  LocalDate upLoadDate;
  String userName;
  String musicLink;
}
