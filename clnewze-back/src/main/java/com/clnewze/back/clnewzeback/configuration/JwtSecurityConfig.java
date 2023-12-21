package com.clnewze.back.clnewzeback.configuration;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.clnewze.back.clnewzeback.jwt.JwtFilter;
import com.clnewze.back.clnewzeback.jwt.TokenProvider;

import lombok.RequiredArgsConstructor;

// usernamePasswordAuthenticationFilter : login 요청 감시, 인증 과정 진행
@RequiredArgsConstructor
public class JwtSecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

  private final TokenProvider tokenProvider;

  @Override
  public void configure(HttpSecurity http) {
    JwtFilter customFilter = new JwtFilter(tokenProvider);
    // 지정된 필터 앞에 커스텀 필터를 추가 (UsernamePasswordAuthenticationFilter 보다 먼저 실행)
    http.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
  }
}
