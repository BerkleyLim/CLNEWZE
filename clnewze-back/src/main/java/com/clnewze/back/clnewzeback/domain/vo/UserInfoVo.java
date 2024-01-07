package com.clnewze.back.clnewzeback.domain.vo;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

// 프론트엔드 개발자에게 보낼 Entity 클래스
@Data
@AllArgsConstructor
@Builder
public class UserInfoVo {
  private Long uno;
  private String id;
  private String userName;
  private String nickName;
  private ZonedDateTime loginTime;
  private LocalDate birthday;
  private Boolean activated;
}
