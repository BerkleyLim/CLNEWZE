package com.clnewze.back.clnewzeback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.domain.PracticeRoom;
import com.clnewze.back.clnewzeback.mapper.PracticeRoomMapper;

@Service
public class PracticeRoomService {
  @Autowired
  PracticeRoomMapper practiceRoomMapper;

  public List<PracticeRoom> selectList(String categories) {
    return practiceRoomMapper.selectList(categories);
  }
}
