package com.clnewze.back.clnewzeback.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
  UserService userService;

//  @PostMapping("/authenticate")
//  public ResponseEntity<ResponseObject<TokenDto>> authorize(@Valid @RequestBody LoginDto loginDto) {
//    // TODO: process POST request
//    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getId(),
//        loginDto.getPassword());
//
//    // authenticate 메소드가 실행 시 CustomUserDetailsService class의 loadUserByUsername
//    // 메소드가 실행
//    Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
//    // 해당 객체를 SecurityContextHolder에 저장
//    SecurityContextHolder.getContext().setAuthentication(authentication);
    // authentication 객체를 createToken 메소드를 통해서 JWT Token 생성
//    String jwt = tokenProvider.createToken(authentication);
//
//    HttpHeaders httpHeaders = new HttpHeaders();
//    // response header에 jwt token에 넣어줌
//    httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);
//
//    // 결과 값 반환
//    TokenDto result = new TokenDto(jwt);
//    ResponseObject<TokenDto> ro = new ResponseObject<>("로그인 성공");
//    ro.setData(result);
//    // tokenDto 이용하여 response body에도 넣어서 리턴함
//    return new ResponseEntity<>(ro, httpHeaders, HttpStatus.OK);
//  }

//  @GetMapping("jwt/test")
//  public String jwtTest() {
//    int userIdx = 1;
//    String jwt = jwtService.createJwt(userIdx);
//    System.out.println(jwt);
//    return jwt;
//    // return jwtService.getJwt();
//  }
}