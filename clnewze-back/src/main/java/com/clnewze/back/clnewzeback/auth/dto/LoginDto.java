package com.clnewze.back.clnewzeback.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
  private String id; // 유저명
  private String password; // 비밀번호
}
