package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.Teacher;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.FileService;
import com.clnewze.back.clnewzeback.service.TeacherService;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

  @Autowired
  TeacherService teacherService;

  @Autowired
  FileService fileService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<Teacher>>> selectList(
      @RequestParam(required = false) String major) {

    List<Teacher> result = teacherService.selectList(major);
    ResponseObject<List<Teacher>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

}
