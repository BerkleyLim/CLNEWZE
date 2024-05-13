package com.clnewze.back.clnewzeback.information;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clnewze.back.clnewzeback.information.dto.Information;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class InformationService {
  private InformationMapper informationMapper;

  public List<Information> selectList(String genre) {
    return informationMapper.selectList(genre);
  }
}
