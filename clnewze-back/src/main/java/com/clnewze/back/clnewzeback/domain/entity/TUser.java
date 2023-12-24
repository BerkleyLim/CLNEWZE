package com.clnewze.back.clnewzeback.domain.entity;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TUser {
  Long uno;
  String id;
  String password;
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
