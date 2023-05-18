package com.clnewze.back.clnewzeback.domain;

import java.time.LocalDate;

import lombok.Data;

@Data
public class PracticeRoom {
  Long pno;
  String username;
  String title;
  String img;
  String name;
  String place;
  String contents;
  LocalDate upLoadDate;
  Integer price;
  String categories;
}
