package com.clnewze.back.clnewzeback.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.domain.dto.LoginDto;
import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.domain.entity.UserAuthority;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.UserService;
import com.clnewze.back.clnewzeback.util.JwtUtil;
import com.clnewze.back.clnewzeback.util.SecurityUtil;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
@Slf4j
public class AuthController {
  private UserService userService;

  @PostMapping("/authenticate")
  public ResponseEntity<ResponseObject<String>> authorize(@Valid @RequestBody LoginDto loginDto) {
    log.debug("JWT 로그인");
    TUser tUser = userService.getMyUserWithAuthorities(loginDto.getId());
    if (tUser == null) {
      ResponseObject<String> ro = new ResponseObject<>("로그인 실패");
      return new ResponseEntity<>(ro, HttpStatus.UNAUTHORIZED);
    }
    String password = loginDto.getPassword();
    if (!SecurityUtil.checkPassword(password, tUser.getPassword())) {
      ResponseObject<String> ro = new ResponseObject<>("로그인 실패");
      return new ResponseEntity<>(ro, HttpStatus.UNAUTHORIZED);
    }
    List<UserAuthority> userAuthorities = tUser.getUserAuthorities();
    String role = "|";
    for (UserAuthority userAuthority : userAuthorities) {
      role += userAuthority.getAuthorityName() + "|";
    }
    String token = JwtUtil.generateToken(tUser.getId(), tUser.getUserName(), role);
    ResponseObject<String> ro = new ResponseObject<>("로그인 성공");
    ro.setData(token);
    // tokenDto 이용하여 response body에도 넣어서 리턴함
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

//  @GetMapping("jwt/test")
//  public String jwtTest() {
//    int userIdx = 1;
//    String jwt = jwtService.createJwt(userIdx);
//    System.out.println(jwt);
//    return jwt;
//    // return jwtService.getJwt();
//  }
}