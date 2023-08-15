package com.clnewze.back.clnewzeback.entity.dto;

import lombok.Data;

@Data
public class Blog {
  Long bno;
  String title;
  String contents;
  Long viewNumber;
  String tag;
}
