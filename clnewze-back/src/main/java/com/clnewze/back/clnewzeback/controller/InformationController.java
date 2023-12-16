package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.entity.Information;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.InformationService;

@RestController
@RequestMapping("/api/information")
public class InformationController {

  @Autowired
  InformationService informationService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<Information>>> selectList(
      @RequestParam(required = false) String genre) {

    List<Information> result = informationService.selectList(genre);
    ResponseObject<List<Information>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }
}
