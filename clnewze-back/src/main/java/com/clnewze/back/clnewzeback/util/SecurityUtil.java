package com.clnewze.back.clnewzeback.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

// UserService 에서 사용하는 메소드 모음 리스트

public class SecurityUtil {
  private static final Logger logger = LoggerFactory.getLogger(SecurityUtil.class);

  // singleton pattern 성립
  //
  private SecurityUtil() {
  }

  // getCurrentUsername 메소드 : Security Cont
  public static Optional<String> getCurrentUsername() {
    // authentication 객체가 저장되는 시점 : JwtFilter의 doFilter 메소드에서
    // Request가 들어올 때 SecurityContext에 Authentication 객체를 저장하여 사용
    final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    if (authentication == null) {
      logger.debug("Security Context에 인증 정보 X");
      return Optional.empty();
    }

    String username = null;
    if (authentication.getPrincipal() instanceof UserDetails springSecurityUser) {
      username = springSecurityUser.getUsername();
    } else if (authentication.getPrincipal() instanceof String) {
      username = (String) authentication.getPrincipal();
    }

    return Optional.ofNullable(username);
  }

}
