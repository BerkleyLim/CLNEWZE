package com.clnewze.back.clnewzeback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.Information;

@Repository
@Mapper
public interface InformationMapper {
  // public Integer totSize(String findStr);
  public List<Information> selectList();
}
