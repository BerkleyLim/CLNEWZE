package com.clnewze.back.clnewzeback.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface InformationMapper {
  public Integer totSize(String findStr);
}
