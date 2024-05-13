package com.clnewze.back.clnewzeback.user.dto;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;

import com.clnewze.back.clnewzeback.auth.dto.UserAuthority;
import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TUserDTO {
  // 스웨거 설정
  @Schema(description = "사용자 인덱스", example = "1")
  private Long uno;
  // 스웨거 설정
  @Schema(description = "사용자 아이디", example = "test1")
  private String id;
  // 스웨거 설정
  @Schema(description = "사용자 비밀번호", example = "test1")
  private String password;

  // 스웨거 설정
  @Schema(description = "사용자의 이름", example = "홍길동")
  private String userName;

  // 스웨거 설정
  @Schema(description = "사용자 생성일", example = "2023-11-11")
  private ZonedDateTime creTime;
  // 스웨거 설정
  @Schema(description = "로그인 시간", example = "2023-12-01T11:11:11")
  private ZonedDateTime loginTime;
  // 스웨거 설정
  @Schema(description = "사용자의 별명", example = "홍길동")
  private String nickName;
  // 스웨거 설정
  @Schema(description = "사용자의 생년월일", example = "1999-11-11")
  private LocalDate birthday;
  // 스웨거 설정
  @Schema(description = "사용자의 활동 여부", example = "true")
  private Boolean activated;

  // 스웨거 설정
  @Schema(description = "사용자의 인증 정보", example = "ROLE_ADMIN, ROLE_USER")
  private List<UserAuthority> userAuthorities;
}
