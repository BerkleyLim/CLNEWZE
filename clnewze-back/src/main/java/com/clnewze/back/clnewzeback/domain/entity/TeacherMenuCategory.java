package com.clnewze.back.clnewzeback.domain.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeacherMenuCategory {
  private Long mtno;
  private Long orderByNo;
  private String name;
  private String category;
}
