package com.clnewze.back.clnewzeback.configuration;

import java.io.IOException;

import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import com.clnewze.back.clnewzeback.util.SessionUtil;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse res, Object handler)
      throws ServletException, IOException {
    SessionUser sessionUser = SessionUtil.getSessionUser();
    if (sessionUser == null) {
      res.setStatus(401);
      return false;
    }
    
    String role = sessionUser.getRole();
    
    if (handler instanceof HandlerMethod) {
      HandlerMethod handlerMethod = (HandlerMethod) handler;
      RequireRole requireRole = handlerMethod.getMethodAnnotation(RequireRole.class);
      if (requireRole != null) {
        // 여기에서 권한 검사 로직 구현
        String requiredRole = requireRole.value();
        // 사용자가 이 역할을 가지고 있는지 검사
        boolean hasRole = role.contains(requiredRole);
        if (!hasRole) {
          res.setStatus(HttpServletResponse.SC_FORBIDDEN);
          return false;
        }
      }
    }

    request.setAttribute(SessionUser.class.getName(), sessionUser);

    return true;
  }

}