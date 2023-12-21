package com.clnewze.back.clnewzeback.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.entity.T_user;

import java.util.Optional;

@Repository
@Mapper
public interface TUserMapper {
  public T_user findByIdAndPassword(String id, String password);

  // 인증된 유저명
  Optional<T_user> findOneWithAuthoritiesById(String id);

  // 전체 조회
  Optional<T_user> findOneWithAuthoritiesById();

  // 회원 가입
  public T_user signUp(T_user user);
}
