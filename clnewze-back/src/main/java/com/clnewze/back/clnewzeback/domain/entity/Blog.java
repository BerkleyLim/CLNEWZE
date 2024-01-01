package com.clnewze.back.clnewzeback.domain.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Blog {
  private Long bno;
  private String title;
  private String contents;
  private Long viewNumber;
  private String tag;
}
