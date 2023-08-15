package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.entity.dto.Blog;
import com.clnewze.back.clnewzeback.entity.model.ResponseObject;
import com.clnewze.back.clnewzeback.entity.vo.BlogVo;
import com.clnewze.back.clnewzeback.service.BlogService;

@RestController
@RequestMapping("/api/blog")
public class BlogController {

  @Autowired
  BlogService blogService;

  /**
   * @return
   */
  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<BlogVo>>> selectList(
      @RequestParam int pageNo,
      @RequestParam int limit) throws Exception {

    List<BlogVo> result = blogService.selectList(pageNo, limit);
    ResponseObject<List<BlogVo>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("selectListAllCount")
  public ResponseEntity<ResponseObject<Integer>> selectListAllCount() {
    Integer result = blogService.selectListAllCount();
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }
}
