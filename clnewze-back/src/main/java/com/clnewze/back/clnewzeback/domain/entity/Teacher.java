package com.clnewze.back.clnewzeback.domain.entity;

import java.time.LocalDate;

import lombok.Data;

@Data
public class Teacher {
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
