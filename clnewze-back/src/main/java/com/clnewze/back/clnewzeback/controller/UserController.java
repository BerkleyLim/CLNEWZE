package com.clnewze.back.clnewzeback.controller;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import com.clnewze.back.clnewzeback.configuration.CurrentUser;
import com.clnewze.back.clnewzeback.configuration.RequireRole;
import com.clnewze.back.clnewzeback.configuration.SessionUser;
import com.clnewze.back.clnewzeback.domain.dto.LoginDto;
import com.clnewze.back.clnewzeback.domain.dto.TUserDto;
import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.domain.entity.UserAuthority;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.UserService;
import com.clnewze.back.clnewzeback.util.SecurityUtil;
import com.clnewze.back.clnewzeback.util.SessionUtil;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/user")
@Slf4j
@AllArgsConstructor
public class UserController {
  private UserService userService;

  // 회원 가입
  @PostMapping("/signup")
  public ResponseEntity<ResponseObject<TUser>> signup(@Valid @RequestBody TUserDto tUserDto)
      throws NoSuchAlgorithmException {
    log.debug("회원가입");
    TUser result = userService.signup(tUserDto);
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 사용자 전체 조회
  @GetMapping("/")
  @RequireRole("ADMIN")
  public ResponseEntity<ResponseObject<TUser>> getAllUserInfoList() {
    // T_user result = userService.getMyUserWithAuthorities().get();
    log.debug("전체 사용자 조회 완료");
//    TUserDto tUserDto = userService.getMyUserWithAuthorities();
//    TUser result = TUser.builder().id(tUserDto.getId())//
//        // .password(tUserDto.getPassword())//
//        .userName(tUserDto.getUserName())//
//        .creTime(tUserDto.getCrtTime())//
//        .loginTime(tUserDto.getLoginTime())//
//        .nickName(tUserDto.getNickName())//
//        .birthday(tUserDto.getBirthday())//
//        .activated(tUserDto.getActivated())//
//        .build();
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
//    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 나의 정보 조회
  @GetMapping("/myinfo")
  public ResponseEntity<ResponseObject<TUser>> getMyUserInfo(@CurrentUser SessionUser sessionUser) {
    TUser result = userService.getMyUserWithAuthorities(sessionUser.getId());
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 인증 로그인 -> 이부분을 JWT 로그인 인증 처리를 진행해야함
  // 혹은 signin API 필요 없이 AuthController를 이용하여 token 값만 받은 것으로 끝내도 무방한지 여부를 알고
  // 싶습니다.
  @PostMapping("/signin")
  public ResponseEntity<ResponseObject<Boolean>> signIn(@RequestBody LoginDto loginDto)
      throws NoSuchAlgorithmException {
    log.debug("로그인 처리 완료");
    TUser tUser = userService.getMyUserWithAuthorities(loginDto.getId());
    if (tUser == null) {
      ResponseObject<Boolean> ro = new ResponseObject<>("로그인 실패");
      ro.setData(false);
      return new ResponseEntity<>(ro, HttpStatus.UNAUTHORIZED);
    }
    String password = loginDto.getPassword();
    if (!SecurityUtil.checkPassword(password, tUser.getPassword())) {
      ResponseObject<Boolean> ro = new ResponseObject<>("로그인 실패");
      ro.setData(false);
      return new ResponseEntity<>(ro, HttpStatus.UNAUTHORIZED);
    }
    List<UserAuthority> userAuthorities = tUser.getUserAuthorities();
    String role = "|";
    for (UserAuthority userAuthority : userAuthorities) {
      role += userAuthority.getAuthorityName() + "|";
    }
    SessionUtil.setSessionUser(tUser.getId(), tUser.getUserName(), role);
    ResponseObject<Boolean> ro = new ResponseObject<>("로그인 성공");
    ro.setData(true);
    // tokenDto 이용하여 response body에도 넣어서 리턴함
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 간편 로그인 (인증 무시)
  @PostMapping("/login")
  public Boolean simpleLogin(@RequestBody TUser tUser) throws NoSuchAlgorithmException {
    Boolean b = userService.userSearch(tUser);
    return b;
  }

  // 로그아웃 처리 용도, 현재는 사용하지 않고 있으며, 개발 예정이다.
  @RequestMapping("/logout")
  public void logout(SessionStatus status, HttpSession session) throws Exception {
    SessionUtil.clearUser();
    // @SessionAttributes에서 관리하는 세션 데이터를 모두 제거한다.
    status.setComplete();
    // 세션을 꺼내 무효화시킨다.
    session.invalidate();
  }

}