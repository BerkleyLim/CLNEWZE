package com.clnewze.back.clnewzeback.blog.vo;

import java.util.List;

import lombok.Data;

@Data
public class BlogVo {
  Long bno;
  String title;
  String contents;
  Long viewNumber;
  String userName;
  List<String> tag;
}
