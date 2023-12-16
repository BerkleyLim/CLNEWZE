package com.clnewze.back.clnewzeback.domain.entity;

import lombok.Data;

@Data
public class Blog {
  Long bno;
  String title;
  String contents;
  Long viewNumber;
  String tag;
}
