package com.clnewze.back.clnewzeback.domain.entity;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Set;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TUser {
  Long uno;
  String id;
  String password;

  //스웨거 설정
  @Schema(description = "사용자의 이름", example = "홍길동")
  String userName;

  ZonedDateTime creTime;
  ZonedDateTime loginTime;
  String nickName;
  LocalDate birthday;
  boolean activated;

  // DB -> Mybatis로 authorities가 안받아져서 임시로 String 형으로 받아 사용
  // 이후, 로직으로 authorities를 넣어 사용한다.
  String typeOfStringAuthorities;

  Set<Authority> authorities;
}
