package com.clnewze.back.clnewzeback.room.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoomMenuCategoryDTO {
  private Long rtno;
  private Long orderby;
  private String name;
  private String category;
}
