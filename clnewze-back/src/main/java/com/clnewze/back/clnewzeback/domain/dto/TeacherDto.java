package com.clnewze.back.clnewzeback.domain.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class TeacherDto {
  Long tno;
  String username;
  String title;
  String img;
  String name;
  String major;
  String place;
  String contents;
  LocalDate upLoadDate;
}
