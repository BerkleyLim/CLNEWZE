package com.clnewze.back.clnewzeback.jwt;

import java.io.IOException;
import java.io.PrintWriter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

  private final Logger logger = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);

  // 401 에러 접근
  // 유효한 자격이 증명되지 않아 접근 시
  @Override
  public void commence(HttpServletRequest request, HttpServletResponse response,
      AuthenticationException authException) throws IOException, ServletException {

    response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    logger.info("401 허가되지 않는 인증 거부");
  }
}
