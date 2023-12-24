package com.clnewze.back.clnewzeback.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.entity.TUser;

import java.util.Optional;

@Repository
@Mapper
public interface TUserMapper {
  public TUser findByIdAndPassword(String id, String password);

  // 인증된 유저명
  Optional<TUser> findOneWithAuthoritiesById(String id);

  // 전체 조회
  Optional<TUser> findOneWithAuthoritiesById();

  // 회원 가입
  public TUser signUp(TUser user);
}
