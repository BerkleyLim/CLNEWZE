package com.clnewze.back.clnewzeback.domain.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Teacher {
  private Long tno;
  private String userName;
  private String title;
  private String img;
  private String name;
  private String major;
  private String place;
  private String contents;
  private LocalDate upLoadDate;
}
