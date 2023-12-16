package com.clnewze.back.clnewzeback.domain.entity;

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
  Integer price;
  String categories;
}
