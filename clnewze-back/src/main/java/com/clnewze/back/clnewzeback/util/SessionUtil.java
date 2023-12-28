package com.clnewze.back.clnewzeback.util;

import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.clnewze.back.clnewzeback.configuration.SessionUser;

import jakarta.servlet.http.HttpServletRequest;

public class SessionUtil {
  /**
   * 세션에 값 셋팅
   */
  public static void setAttribute(String name, Object object) {
    RequestContextHolder.currentRequestAttributes().setAttribute(name, object, RequestAttributes.SCOPE_SESSION);
  }

  /**
   * 세션값 가져오기
   */
  public static Object getAttribute(String name) {
    return RequestContextHolder.currentRequestAttributes().getAttribute(name, RequestAttributes.SCOPE_SESSION);
  }

  /**
   * 세션값 삭제
   */
  public static void removeAttribute(String name) {
    RequestContextHolder.currentRequestAttributes().removeAttribute(name, RequestAttributes.SCOPE_SESSION);
  }

  /**
   * 로그인 여부 반환
   */
  public static boolean isLogin() {

    if (RequestContextHolder.currentRequestAttributes().getAttribute(SessionUser.class.getName(),
        RequestAttributes.SCOPE_SESSION) == null) {
      return false;
    } else {
      return true;
    }
  }

  public static SessionUser setSessionUser(String id, String userName, String role) {
    SessionUser sessionUser = SessionUser.builder()//
        .id(id)//
        .userName(userName)//
        .role(role)//
        .build();
    setAttribute(SessionUser.class.getName(), sessionUser);
    return sessionUser;
  }

  public static SessionUser getSessionUser() {
    return (SessionUser) getAttribute(SessionUser.class.getName());
  }

  public static void clearUser() {
    removeAttribute(SessionUser.class.getName());
    RequestContextHolder.resetRequestAttributes();
  }

  public static HttpServletRequest getCurrentHttpRequest() {
    RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
    if (requestAttributes instanceof ServletRequestAttributes) {
      HttpServletRequest request = ((ServletRequestAttributes) requestAttributes).getRequest();
      return request;
    }
    return null;
  }

  public static String getCurrentServletPath() {
    HttpServletRequest currentHttpRequest = getCurrentHttpRequest();
    if (currentHttpRequest != null) {
      return currentHttpRequest.getServletPath();
    }
    return null;
  }

  public static String getCurrentMethod() {
    HttpServletRequest currentHttpRequest = getCurrentHttpRequest();
    if (currentHttpRequest != null) {
      return currentHttpRequest.getMethod();
    }
    return null;
  }
}
