package com.clnewze.back.clnewzeback.domain.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeacherMenuCategory {
  Long mtno;
  Long orderByNo;
  String name;
  String category;
}
