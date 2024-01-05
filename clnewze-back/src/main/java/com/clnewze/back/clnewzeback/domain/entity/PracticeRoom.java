package com.clnewze.back.clnewzeback.domain.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PracticeRoom {
  private Long pno;
  private String username;
  private String title;
  private String img;
  private String name;
  private String place;
  private String contents;
  private Integer price;
  private String categories;
  private Long uno;
}
