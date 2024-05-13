package com.clnewze.back.clnewzeback.room.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PracticeRoomMenuCategory {
  private Long ptno;
  private Long orderby;
  private String name;
  private String category;
}
