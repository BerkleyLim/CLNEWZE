package com.clnewze.back.clnewzeback.domain.entity;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;
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
  private Long uno;
  private String id;
  private String password;

  // 스웨거 설정
  @Schema(description = "사용자의 이름", example = "홍길동")
  private String userName;

  private ZonedDateTime creTime;
  private ZonedDateTime loginTime;
  private String nickName;
  private LocalDate birthday;
  private boolean activated;

  // DB -> Mybatis로 authorities가 안받아져서 임시로 String 형으로 받아 사용
  // 이후, 로직으로 authorities를 넣어 사용한다.
  private String typeOfStringAuthorities;

  private Set<Authority> authorities;
  private List<UserAuthority> userAuthorities;
}
