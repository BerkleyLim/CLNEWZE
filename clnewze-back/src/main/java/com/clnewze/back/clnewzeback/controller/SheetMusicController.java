package com.clnewze.back.clnewzeback.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.SheetMusic;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.FileService;
import com.clnewze.back.clnewzeback.service.SheetMusicService;

@RestController
@RequestMapping("/api/sheetmusic")
public class SheetMusicController {

  @Autowired
  SheetMusicService sheetMusicService;

  @Autowired
  FileService fileService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<SheetMusic>>> selectList(
      @RequestParam(required = false) String genre) {

    List<SheetMusic> result = sheetMusicService.selectList(genre);
    ResponseObject<List<SheetMusic>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("/converttest")
  public void convertTest() throws IOException {
    fileService.convertTest();
  }
}
