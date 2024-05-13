package com.clnewze.back.clnewzeback.room.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PracticeRoom {
  private Long pno;
  private String userName;
  private String title;
  private String img;
  private String name;
  private String place;
  private String contents;
  private Integer price;
  private String categories;
  private LocalDate upLoadDate;
  private Long uno;
}
