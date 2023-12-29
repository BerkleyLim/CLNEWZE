package com.clnewze.back.clnewzeback.domain.entity;

import lombok.Data;

@Data
public class PracticeRoom {
  private Long pno;
  private String username;
  private String title;
  private String img;
  private String name;
  private String place;
  private String contents;
  Integer price;
  private String categories;
}
