package com.clnewze.back.clnewzeback.user;

import com.clnewze.back.clnewzeback.user.dto.TUserDTO;
import com.clnewze.back.clnewzeback.user.dto.UserProfileDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.clnewze.back.clnewzeback.auth.dto.UserAuthority;

import java.util.List;

@Repository
@Mapper
public interface TUserMapper {
  public TUserDTO findByIdAndPassword(String id, String password);

  // id로 User 조회
  public TUserDTO findOneById(String id);

  // 인증된 유저명
  public TUserDTO findOneWithAuthoritiesById(String id);

  // 전체 조회
  List<TUserDTO> findOneWithAuthoritiesById();

  // 회원 가입
  public TUserDTO signUp(TUserDTO user);

  // 회원 정보 수정
  public int updateUserInfo(TUserDTO user);

  public int inserUser(TUserDTO user);

  public int inserUserAuthority(UserAuthority userAuthority);

  // 프로필 정보 리스트 출력
  public UserProfileDTO selectProfileUser(Long uno);
}
