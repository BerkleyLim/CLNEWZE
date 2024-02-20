package com.clnewze.back.clnewzeback.controller;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import com.clnewze.back.clnewzeback.configuration.Description;
import com.clnewze.back.clnewzeback.configuration.CurrentUser;
import com.clnewze.back.clnewzeback.configuration.RequireRole;
import com.clnewze.back.clnewzeback.configuration.SessionUser;
import com.clnewze.back.clnewzeback.domain.dto.LoginDto;
import com.clnewze.back.clnewzeback.domain.dto.TUserDto;
import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.domain.entity.UserAuthority;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.domain.vo.UserInfoVo;
import com.clnewze.back.clnewzeback.service.UserService;
import com.clnewze.back.clnewzeback.util.SecurityUtil;
import com.clnewze.back.clnewzeback.util.SessionUtil;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// 스웨거 설정
@Tag(name = "01. 사용자", description = "사용자 정보 조회 API")
//
@RestController
@RequestMapping("/api/user")
@Slf4j
@AllArgsConstructor
public class UserController {
  private UserService userService;

  // 스웨거 설정
  @Operation(//
      summary = "회원가입", //
      description = "회원가입 합니다." //
  )
  @ApiResponses(value = { //
      @ApiResponse(//
          responseCode = "200", //
          description = "회원가입 성공", //
          content = { @Content(//
              mediaType = "application/json" //
          ) }//
      ), //
      @ApiResponse(responseCode = "401", description = "인증실패", content = {
          @Content(mediaType = "application/json", examples = { @ExampleObject(Description.ERROR_401) }) }), //
      @ApiResponse(responseCode = "403", description = "권한없음", content = {
          @Content(mediaType = "application/json", examples = { @ExampleObject(Description.ERROR_403) }) }),//
  })
  //
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
  @PostMapping("/")
  @RequireRole("ADMIN")
  public ResponseEntity<ResponseObject<List<TUser>>> getAllUserInfoList() {
    log.debug("전체 사용자 조회 완료");
    List<TUser> result = userService.getMyUserWithAuthorities();
    ResponseObject<List<TUser>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 특정 사용자 조회
  // 프로필 조회를 위해 적용
  @GetMapping("/profile")
  public ResponseEntity<ResponseObject<UserInfoVo>> getMyProfileUserInfo(
      @Valid @Parameter(description = Description.USER_ID, required = true) // 스웨거 파라미터 설정
      @RequestParam("id") String id) {
    TUser tUser = userService.getMyUserWithAuthorities(id);
    UserInfoVo result = UserInfoVo.builder().uno(tUser.getUno()).id(tUser.getId()).userName(tUser.getUserName())
        .nickName(tUser.getNickName()).loginTime(tUser.getLoginTime()).birthday(tUser.getBirthday())
        .activated(tUser.getActivated()).build();
    ResponseObject<UserInfoVo> ro = new ResponseObject<>("로그인 이후 필요 유저 정보 확인 성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 나의 정보 조회
  @GetMapping("/myinfo")
  public ResponseEntity<ResponseObject<UserInfoVo>> getMyUserInfo(@CurrentUser SessionUser sessionUser) {
    TUser tUser = userService.getMyUserWithAuthorities(sessionUser.getId());
    // front-End 개발자에게 보낼 회원 정보
    UserInfoVo result = UserInfoVo.builder().uno(tUser.getUno()).id(tUser.getId()).userName(tUser.getUserName())
        .nickName(tUser.getNickName()).loginTime(tUser.getLoginTime()).birthday(tUser.getBirthday())
        .activated(tUser.getActivated()).build();
    // UserInfoVo result =
    // UserInfoVo.builder().uno(tUser.getUno()).id(tUser.getId()).password(tUser.getPassword())
    // .userName(tUser.getUserName()).nickName(tUser.getNickName()).loginTime(tUser.getLoginTime())
    // .birthday(tUser.getBirthday()).activated(tUser.getActivated()).build();
    ResponseObject<UserInfoVo> ro = new ResponseObject<>("로그인 이후 필요 유저 정보 확인 성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // // 나의 정보 조회 - 패스워드 출력
  // // 이것은 업데이트 용으로 쓰임
  // @GetMapping("/myinfo/password")
  // public ResponseEntity<ResponseObject<UserInfoVo>>
  // getMyUserInfoPassword(@CurrentUser SessionUser sessionUser) {
  // TUser tUser = userService.getMyUserWithAuthorities(sessionUser.getId());
  // // front-End 개발자에게 보낼 회원 정보
  // UserInfoVo result =
  // UserInfoVo.builder().uno(tUser.getUno()).id(tUser.getId()).password(tUser.getPassword())
  // .userName(tUser.getUserName()).nickName(tUser.getNickName()).loginTime(tUser.getLoginTime())
  // .birthday(tUser.getBirthday()).activated(tUser.getActivated()).build();
  // ResponseObject<UserInfoVo> ro = new ResponseObject<>("로그인 이후 필요 유저 정보 확인
  // 성공");
  // ro.setData(result);
  // return new ResponseEntity<>(ro, HttpStatus.OK);
  // }

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

  // 회원 정보 수정
  @PostMapping("/update")
  public ResponseEntity<ResponseObject<UserInfoVo>> updateMyUserInfo(@CurrentUser SessionUser sessionUser,
      TUser tUser) {
    // TUser tUser = userService.getMyUserWithAuthorities(sessionUser.getId());

    // 아래는 업데이트 실시
    int i = userService.updateUserInfo(tUser);
    // front-End 개발자에게 보낼 회원 정보
    UserInfoVo result = UserInfoVo.builder().uno(tUser.getUno()).id(tUser.getId()).userName(tUser.getUserName())
        .nickName(tUser.getNickName()).loginTime(tUser.getLoginTime()).birthday(tUser.getBirthday())
        .activated(tUser.getActivated()).build();
    // UserInfoVo result =
    // UserInfoVo.builder().uno(tUser.getUno()).id(tUser.getId()).password(tUser.getPassword())
    // .userName(tUser.getUserName()).nickName(tUser.getNickName()).loginTime(tUser.getLoginTime())
    // .birthday(tUser.getBirthday()).activated(tUser.getActivated()).build();
    ResponseObject<UserInfoVo> ro = new ResponseObject<>("로그인 이후 필요 유저 정보 확인 성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

}