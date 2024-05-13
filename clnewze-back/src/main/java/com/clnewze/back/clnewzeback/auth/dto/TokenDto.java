package com.clnewze.back.clnewzeback.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// token 정보를 담는 dto
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TokenDto {
  private String token;
}
