package com.clnewze.back.clnewzeback.controller;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import com.clnewze.back.clnewzeback.entity.dao.T_user;
import com.clnewze.back.clnewzeback.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  UserService userService;

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
}