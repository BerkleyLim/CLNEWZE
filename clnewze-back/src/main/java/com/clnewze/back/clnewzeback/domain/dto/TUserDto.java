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
  private String id;
  private String password;
  private String userName;
  private ZonedDateTime crtTime;
  private ZonedDateTime loginTime;
  private String nickName;
  private LocalDate birthday;
  private Boolean activated;

  private Set<AuthorityDto> authorityDtoSet;
}
