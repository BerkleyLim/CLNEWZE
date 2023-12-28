package com.clnewze.back.clnewzeback.configuration;

import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import com.clnewze.back.clnewzeback.util.JwtUtil;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtInterceptor implements HandlerInterceptor {

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    String token = request.getHeader("Authorization");
    if (token == null || !token.startsWith("Bearer ")) {
      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
      return false; // 토큰이 없거나 유효하지 않으면 요청을 차단
    }
    token = token.substring(7);// Bearer 제거
    Claims claims = JwtUtil.getClaims(token);
    String id = claims.getSubject();
    String role = claims.get("role", String.class);
    String userName = claims.get("userName", String.class);

    // 여기서 username을 이용하여 추가적인 검증 수행 가능
    if (JwtUtil.validateToken(token, id) == false) {
      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
      return false;
    }

    if (handler instanceof HandlerMethod) {
      HandlerMethod handlerMethod = (HandlerMethod) handler;
      RequireRole requireRole = handlerMethod.getMethodAnnotation(RequireRole.class);
      if (requireRole != null) {
        // 여기에서 권한 검사 로직 구현
        String requiredRole = requireRole.value();
        // 사용자가 이 역할을 가지고 있는지 검사
        boolean hasRole = role.contains(requiredRole);
        if (!hasRole) {
          response.setStatus(HttpServletResponse.SC_FORBIDDEN);
          return false;
        }
      }
    }
    SessionUser sessionUser = SessionUser.builder()//
        .id(id)//
        .role(role)//
        .userName(userName)//
        .build();//
    request.setAttribute(SessionUser.class.getName(), sessionUser);
    return true;
  }
}
