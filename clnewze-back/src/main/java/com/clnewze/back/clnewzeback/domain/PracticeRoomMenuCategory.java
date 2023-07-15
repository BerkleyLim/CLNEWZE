package com.clnewze.back.clnewzeback.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PracticeRoomMenuCategory {
  Long ptno;
  Long orderby;
  String name;
  String category;
}
