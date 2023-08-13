package com.clnewze.back.clnewzeback.entity.dao;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeacherMenuCategory {
  Long mtno;
  Long orderby;
  String name;
  String category;
}