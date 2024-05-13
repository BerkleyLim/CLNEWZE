package com.clnewze.back.clnewzeback.information;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.information.dto.Information;

@Repository
@Mapper
public interface InformationMapper {
  public List<Information> selectList(String genre);
}
