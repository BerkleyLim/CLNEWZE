package com.clnewze.back.clnewzeback.configuration;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SessionUser {
  private String id;
  private String role;
  private String userName;
}
