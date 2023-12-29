package com.clnewze.back.clnewzeback.domain.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeacherMenuCategoryDto {
  private Long mtno;
  private Long orderByNo;
  private String name;
  private String category;
}
