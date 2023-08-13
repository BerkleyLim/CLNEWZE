package com.clnewze.back.clnewzeback.entity.vo;

import java.util.List;

import lombok.Data;

@Data
public class BlogVo {
  Long bno;
  String title;
  String contents;
  Long viewNumber;
  List<String> tag;
}
