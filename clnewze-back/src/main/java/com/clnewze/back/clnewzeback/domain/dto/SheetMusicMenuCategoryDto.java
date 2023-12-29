package com.clnewze.back.clnewzeback.domain.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SheetMusicMenuCategoryDto {
  private Long smtno;
  private Long orderby;
  private String name;
  private String category;
}
