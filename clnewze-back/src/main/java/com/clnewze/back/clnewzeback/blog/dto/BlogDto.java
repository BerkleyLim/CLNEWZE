package com.clnewze.back.clnewzeback.blog.dto;

import lombok.Data;

@Data
public class BlogDto {
  private Long bno;
  private String title;
  private String contents;
  private Long viewNumber;
  private String tag;
}
