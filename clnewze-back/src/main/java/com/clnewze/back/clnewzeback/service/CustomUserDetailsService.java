package com.clnewze.back.clnewzeback.service;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.clnewze.back.clnewzeback.domain.entity.Authority;
import com.clnewze.back.clnewzeback.domain.entity.T_user;
import com.clnewze.back.clnewzeback.mapper.TUserMapper;
import com.google.gson.JsonArray;

import lombok.AllArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

// AuthController
// authenticationManagerBuilder.getObject().authenticate(authenticationToken); 실행 시 loadUserByUsername 실행
@Component("userDetailsService")
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
  TUserMapper tUserMapper;

  // 의무적으로 넣어줘야함
  // 로그인시에 DB에서 유저정보와 권한정보를 가져와서 해당 정보를 기반으로 userdetails.User 객체를 생성해 리턴
  @Override
  @Transactional
  public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
    Optional<T_user> oTUser = tUserMapper.findOneWithAuthoritiesById(id);
    T_user tUser = oTUser.get();

    // 이 로직 시작 -> 수동으로 넣으면 authorities 누락이 안되고 성공한다.
    String[] str = tUser.getTypeOfStringAuthorities().replace("\"", "").replace("[", "").replace("]", "")
        .replace(" ", "").split(",");
    Authority authority = new Authority();
    Set<Authority> authorities = new HashSet<>();
    for (int i = 0; i < str.length; i++) {
      authority.setAuthorityName(str[i]);
      authorities.add(authority);
    }

    tUser.setAuthorities(authorities);
    oTUser.ifPresent(null);

    System.out.println("JWT 인증서 받아오기 테스트 결과 : " + tUser);
    // 로직 종료 : 수동으로 넣으면 authorities 누락 안됨, 이유는 알 수 없음

    return tUserMapper.findOneWithAuthoritiesById(id)
        .map(user -> createUser(id, user))
        .orElseThrow(() -> new UsernameNotFoundException(id + " -> 데이터베이스에서 찾을 수 없습니다."));
  }

  private org.springframework.security.core.userdetails.User createUser(String id, T_user user) {
    if (!user.isActivated()) {
      throw new RuntimeException(id + " -> 활성화되어 있지 않습니다.");
    }

    List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
        .map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
        .collect(Collectors.toList());

    return new org.springframework.security.core.userdetails.User(user.getId(),
        user.getPassword(),
        grantedAuthorities);
  }

}
