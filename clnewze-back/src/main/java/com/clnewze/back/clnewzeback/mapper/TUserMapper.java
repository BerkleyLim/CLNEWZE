package com.clnewze.back.clnewzeback.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.entity.T_user;

@Repository
@Mapper
public interface TUserMapper {
  public T_user findByIdAndPassword(String id, String password);
}
