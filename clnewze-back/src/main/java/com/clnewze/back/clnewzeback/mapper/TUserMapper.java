package com.clnewze.back.clnewzeback.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.domain.entity.UserAuthority;

import java.util.Optional;

@Repository
@Mapper
public interface TUserMapper {
  public TUser findByIdAndPassword(String id, String password);

  // id로 User 조회
  public TUser findOneById(String id);

  // 인증된 유저명
  public TUser findOneWithAuthoritiesById(String id);

  // 전체 조회
  Optional<TUser> findOneWithAuthoritiesById();

  // 회원 가입
  public TUser signUp(TUser user);

  public int inserUser(TUser user);
  public int inserUserAuthority(UserAuthority userAuthority);
}
