package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.Information;
import com.clnewze.back.clnewzeback.service.InformationService;

@RestController
@RequestMapping("/api/information")
public class InformationController {

  @Autowired
  InformationService informationService;

  @GetMapping("/selectList")
  public List<Information> selectList() {
    return informationService.selectList();
  }
}
