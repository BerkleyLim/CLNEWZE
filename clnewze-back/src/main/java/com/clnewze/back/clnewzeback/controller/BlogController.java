package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.entity.dao.Blog;
import com.clnewze.back.clnewzeback.entity.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.BlogService;

@RestController
@RequestMapping("/api/blog")
public class BlogController {

  @Autowired
  BlogService blogService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<Blog>>> selectList(
  // @RequestParam(required = false) String genre) {
  ) {

    List<Blog> result = blogService.selectList();
    ResponseObject<List<Blog>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }
}
