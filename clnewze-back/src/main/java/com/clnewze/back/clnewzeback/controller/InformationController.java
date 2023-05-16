package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.Information;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.InformationService;

@RestController
@RequestMapping("/api/information")
public class InformationController {

  @Autowired
  InformationService informationService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<Information>>> selectList(
      @RequestBody(required = false) Information information) {

    List<Information> result = informationService.selectList(information == null ? null : information.getGenre());
    ResponseObject<List<Information>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }
}
