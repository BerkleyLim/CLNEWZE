package com.clnewze.back.clnewzeback.jwt;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// 실제 이 컴포넌트 이용하여 인증 작업 진행 Filter
// 검증 끝난 JWT로부터 유저 정보를 받아와
// UsernamePasswordAuthenticationFilter 전달
@RequiredArgsConstructor
@Slf4j
public class JwtFilter extends GenericFilterBean {
  private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);
  public static final String AUTHORIZATION_HEADER = "Authorization";

  private final TokenProvider tokenProvider;

  // 필터될 로직
  // 토큰 인증 정보를 SecurityContext에 저장 역할 수행
  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {

    HttpServletRequest httpServletRequest = (HttpServletRequest) request;
    String jwt = resolveToken(httpServletRequest);
    String requestURI = httpServletRequest.getRequestURI();

    if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
      Authentication authentication = tokenProvider.getAuthentication(jwt);
      SecurityContextHolder.getContext().setAuthentication(authentication);
      logger.info("Security Context에 '{}' 인증 정보를 저장했습니다, uri: {}", authentication.getName(), requestURI);
    } else {
      logger.info("유효한 JWT 토큰이 없습니다., uri: {}", requestURI);
    }
    chain.doFilter(httpServletRequest, response);
  }

  /** 토큰 정보 추출 */
  private String resolveToken(HttpServletRequest request) {
    // 인증 시 추출할 토큰
    String bearerToken = request.getHeader(AUTHORIZATION_HEADER);

    if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
      return bearerToken.substring(7);
    }
    return null;
  }
}
