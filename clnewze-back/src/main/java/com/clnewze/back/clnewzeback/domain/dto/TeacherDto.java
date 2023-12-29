package com.clnewze.back.clnewzeback.domain.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class TeacherDto {
  private Long tno;
  private String username;
  private String title;
  private String img;
  private String name;
  private String major;
  private String place;
  private String contents;
  private LocalDate upLoadDate;
}
