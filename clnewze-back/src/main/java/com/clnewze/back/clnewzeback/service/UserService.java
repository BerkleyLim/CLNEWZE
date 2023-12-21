package com.clnewze.back.clnewzeback.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Collections;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.clnewze.back.clnewzeback.domain.dto.AuthorityDto;
import com.clnewze.back.clnewzeback.domain.dto.T_userDto;
import com.clnewze.back.clnewzeback.domain.entity.Authority;
import com.clnewze.back.clnewzeback.domain.entity.T_user;
import com.clnewze.back.clnewzeback.mapper.TUserMapper;
import com.clnewze.back.clnewzeback.util.SecurityUtil;
import com.clnewze.back.clnewzeback.util.error.code.NotFoundMemberException;

import lombok.RequiredArgsConstructor;

@Service
// @Log4j2
@RequiredArgsConstructor
public class UserService {
  TUserMapper userMapper;
  PasswordEncoder passwordEncoder;

  // 회원 가입 - jwt 를 이용한 인증까지 권한 부여
  @Transactional
  public T_user signup(T_userDto t_userDto) {
    // username 검색 시 존재 하면 에러 발생
    if (userMapper.findOneWithAuthoritiesById(t_userDto.getId()).orElse(null) != null) {
      throw new RuntimeException("이미 가입된 유저입니다.");
    }

    // 가입이 되지 않은 회원일 경우
    Authority authority = Authority.builder()
        .authorityName("ROLE_USER")
        .build();

    T_user user = T_user.builder()
        .id(t_userDto.getId())
        .userName(t_userDto.getUserName())
        .password(passwordEncoder.encode(t_userDto.getPassword()))
        .authorities(Collections.singleton(authority))
        .build();

    return userMapper.signUp(user);
  }

  @Transactional(readOnly = true)
  public T_userDto getMyUserWithAuthorities(String userName) {
    T_user user = userMapper.findOneWithAuthoritiesById(userName).orElse(null);
    if (user == null) {
      return null;
    }

    return T_userDto.builder()
        .userName(user.getUserName())
        .nickName(user.getNickName())
        .authorityDtoSet(user.getAuthorities().stream()
            .map(authority -> AuthorityDto.builder().authorityName(authority.getAuthorityName()).build())
            .collect(Collectors.toSet()))
        .build();
  }

  @Transactional(readOnly = true)
  public T_userDto getMyUserWithAuthorities() {
    T_user user = SecurityUtil.getCurrentUsername()
        .flatMap(userMapper::findOneWithAuthoritiesById)
        .orElseThrow(() -> new NotFoundMemberException("Member not found"));

    if (user == null) {
      return null;
    }
    return T_userDto.builder()
        .userName(user.getUserName())
        .nickName(user.getNickName())
        .authorityDtoSet(user.getAuthorities().stream()
            .map(authority -> AuthorityDto.builder().authorityName(authority.getAuthorityName()).build())
            .collect(Collectors.toSet()))
        .build();
  }

  // 회원 정보 검색 - simplelogin으로 임시로 로그인 처리용
  public Boolean userSearch(T_user t_user) throws NoSuchAlgorithmException {
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

    T_user user = userMapper.findByIdAndPassword(t_user.getId(), t_user.getPassword());

    // 검색 일치시
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
}
