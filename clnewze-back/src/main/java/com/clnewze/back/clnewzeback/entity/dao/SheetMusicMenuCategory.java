package com.clnewze.back.clnewzeback.entity.dao;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SheetMusicMenuCategory {
  Long smtno;
  Long orderby;
  String name;
  String category;
}
