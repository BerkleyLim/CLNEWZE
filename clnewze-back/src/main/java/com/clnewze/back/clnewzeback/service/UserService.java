package com.clnewze.back.clnewzeback.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.clnewze.back.clnewzeback.domain.dto.AuthorityDto;
import com.clnewze.back.clnewzeback.domain.dto.TUserDto;
import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.domain.entity.UserAuthority;
import com.clnewze.back.clnewzeback.mapper.TUserMapper;
import com.clnewze.back.clnewzeback.util.SecurityUtil;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {
  private TUserMapper userMapper;

  // 회원 가입 - jwt 를 이용한 인증까지 권한 부여
  @Transactional
  public TUser signup(TUserDto t_userDto) {
    // username 검색 시 존재 하면 에러 발생
    if (userMapper.findOneById(t_userDto.getId()) != null) {
      throw new RuntimeException("이미 가입된 유저입니다.");
    }

    TUser user = TUser.builder()
        .id(t_userDto.getId())
        .userName(t_userDto.getUserName())
        .password(SecurityUtil.encodePassword(t_userDto.getPassword()))
        .build();


    userMapper.inserUser(user);

    // 가입이 되지 않은 회원일 경우
    UserAuthority userAuthority = UserAuthority.builder()
        .authorityName("ROLE_USER")
        // insert 쿼리에서 selectKey를 통해 uno 값을 TUser에 저장해 준다.
        .uno(user.getUno())
        .build();
    userMapper.inserUserAuthority(userAuthority);

    return user;
  }

  @Transactional(readOnly = true)
  public TUserDto getMyUserWithAuthorities(String userName) {
    TUser user = userMapper.findOneWithAuthoritiesById(userName).orElse(null);
    if (user == null) {
      return null;
    }

    return TUserDto.builder()
        .userName(user.getUserName())
        .nickName(user.getNickName())
        .authorityDtoSet(user.getAuthorities().stream()
            .map(authority -> AuthorityDto.builder().authorityName(authority.getAuthorityName()).build())
            .collect(Collectors.toSet()))
        .build();
  }

  // 회원 정보 검색 - simplelogin으로 임시로 로그인 처리용
  public Boolean userSearch(TUser t_user) throws NoSuchAlgorithmException {
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    md.update(t_user.getPassword().getBytes());

    // System.out.println("256 해쉬 내용 : " + md.toString());

    // System.out.println(bytesToHex(md.digest()));
    StringBuilder builder = new StringBuilder();
    for (byte b : md.digest()) {
      builder.append(String.format("%02x", b));
    }
    t_user.setPassword(builder.toString());
    System.out.println(builder);

    TUser user = userMapper.findByIdAndPassword(t_user.getId(), t_user.getPassword());

    // 검색 일치시
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
}
