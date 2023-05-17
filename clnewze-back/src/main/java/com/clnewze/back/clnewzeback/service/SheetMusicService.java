package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.SheetMusic;
import com.clnewze.back.clnewzeback.mapper.SheetMusicMapper;

@Service
public class SheetMusicService {
  @Autowired
  SheetMusicMapper sheetMusicMapper;

  public List<SheetMusic> selectList(String genre) {
    return sheetMusicMapper.selectList(genre);
  }
}
