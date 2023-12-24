package com.clnewze.back.clnewzeback.controller;

import java.security.NoSuchAlgorithmException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import com.clnewze.back.clnewzeback.domain.dto.T_userDto;
import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {
  UserService userService;

  // 회원 가입
  @PostMapping("/signup")
  public ResponseEntity<ResponseObject<TUser>> signup(@Valid @RequestBody T_userDto t_userDto)
      throws NoSuchAlgorithmException {
    TUser result = userService.signup(t_userDto);
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 사용자 조회
  @GetMapping("/")
  // @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
  public ResponseEntity<ResponseObject<TUser>> getMyUserInfo() {
    // T_user result = userService.getMyUserWithAuthorities().get();
    T_userDto t_userDto = userService.getMyUserWithAuthorities();
    TUser result = TUser.builder()
        .id(t_userDto.getId())
        // .password(t_userDto.getPassword())
        .userName(t_userDto.getUserName())
        .creTime(t_userDto.getCrtTime())
        .loginTime(t_userDto.getLoginTime())
        .nickName(t_userDto.getNickName())
        .birthday(t_userDto.getBirthday())
        .activated(t_userDto.getActivated())
        .build();
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 특정 사용자 조회
  @GetMapping("/{username}")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  public ResponseEntity<ResponseObject<TUser>> getMyUserInfo(@RequestParam String id) {
    // T_user result = userService.getMyUserWithAuthorities(id).get();
    T_userDto t_userDto = userService.getMyUserWithAuthorities(id);
    TUser result = TUser.builder()
        .id(t_userDto.getId())
        .userName(t_userDto.getUserName())
        .creTime(t_userDto.getCrtTime())
        .loginTime(t_userDto.getLoginTime())
        .nickName(t_userDto.getNickName())
        .birthday(t_userDto.getBirthday())
        .activated(t_userDto.getActivated())
        .build();
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 인증 로그인
  @PostMapping("/signin")
  public Boolean signIn(@RequestBody TUser t_user) throws NoSuchAlgorithmException {
    Boolean b = userService.userSearch(t_user);
    return b;
  }

  // 간편 로그인 (인증 무시)
  @PostMapping("/simplelogin")
  public Boolean simpleLogin(@RequestBody TUser t_user) throws NoSuchAlgorithmException {
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