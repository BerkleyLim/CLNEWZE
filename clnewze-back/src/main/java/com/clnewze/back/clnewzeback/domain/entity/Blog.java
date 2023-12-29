package com.clnewze.back.clnewzeback.domain.entity;

import lombok.Data;

@Data
public class Blog {
  private Long bno;
  private String title;
  private String contents;
  private Long viewNumber;
  private String tag;
}
