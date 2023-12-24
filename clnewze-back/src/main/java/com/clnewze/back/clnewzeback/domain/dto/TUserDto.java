package com.clnewze.back.clnewzeback.domain.dto;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TUserDto {
  String id;
  String password;
  String userName;
  ZonedDateTime crtTime;
  ZonedDateTime loginTime;
  String nickName;
  LocalDate birthday;
  Boolean activated;

  Set<AuthorityDto> authorityDtoSet;
}
