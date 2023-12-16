package com.clnewze.back.clnewzeback.controller;

import java.security.NoSuchAlgorithmException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import com.clnewze.back.clnewzeback.domain.entity.T_user;
import com.clnewze.back.clnewzeback.jwt.JwtService;
import com.clnewze.back.clnewzeback.service.UserService;

import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
  UserService userService;
  JwtService jwtService;

  @PostMapping("/simplelogin")
  public Boolean simpleLogin(@RequestBody T_user t_user) throws NoSuchAlgorithmException {
    Boolean b = userService.userSearch(t_user);
    return b;
  }

  @RequestMapping("/logout")
  public void logout(SessionStatus status, HttpSession session) throws Exception {
    // @SessionAttributes에서 관리하는 세션 데이터를 모두 제거한다.
    status.setComplete();
    // 세션을 꺼내 무효화시킨다.
    session.invalidate();
  }

  @GetMapping("jwt/test")
  public String jwtTest() {
    int userIdx = 1;
    String jwt = jwtService.createJwt(userIdx);
    System.out.println(jwt);
    return jwt;
    // return jwtService.getJwt();
  }
}