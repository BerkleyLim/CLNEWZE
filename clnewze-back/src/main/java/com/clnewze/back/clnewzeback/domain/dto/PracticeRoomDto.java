package com.clnewze.back.clnewzeback.domain.dto;

import lombok.Data;

@Data
public class PracticeRoomDto {
  private Long pno;
  private String username;
  private String title;
  private String img;
  private String name;
  private String place;
  private String contents;
  private Integer price;
  private String categories;
}
