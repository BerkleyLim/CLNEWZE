package com.clnewze.back.clnewzeback.configuration;

import java.io.IOException;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

//@Slf4j
public class LoginInterceptor implements HandlerInterceptor {
//  private static final Constants constants = new Constants();
//  private static Set<String> permissionFreeUrlSet = new HashSet<>();
//  private static Set<String> apiUrlSet = new HashSet<>();
//  static {
//    permissionFreeUrlSet.add("");
//    permissionFreeUrlSet.add("/");
//
//    //api from driverApp
//    apiUrlSet.add("/api/driver/post/message");
//    apiUrlSet.add("/api/driver/read/message");
//  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse res, Object handler)
      throws ServletException, IOException {

//    String servletPath = request.getServletPath();
//    if(apiUrlSet.contains(servletPath)){
//      return true;
//    }
//
//    if (!AuthUtil.isLogin()) {
//      if ("TRUE".equals(RequestUtil.getHeader(request, "AJAX"))) {
//        res.setStatus(401);
//        return false;
//      } else {
//        String redirect = Constants.CONTEXT_PATH + "/login";
//        res.sendRedirect(redirect);
//        return false;
//      }
//    }
//    String method = request.getMethod();
//
//    SessionAdmin admin = AuthUtil.getSessionAdmin();
//    request.setAttribute("sessionAdmin", admin);
//    request.setAttribute("Constants", constants);
//
//    if ("POST".equals(method)) {
//      String csrfToken = admin.getCsrfToken();
//      if (!csrfToken.equals(RequestUtil.getHeader(request, "_csrfToken"))) {
//        res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//        return false;
//      }
//    }
//
//    if (permissionFreeUrlSet.contains(servletPath) || servletPath.startsWith("/dn/")) {
//      return true;
//    }
//
//    try {
//      if ("GET".equals(method)) {
//        ValidateUtil.isTrue(AuthUtil.hasReadPermission(), "권한이 없습니다.");
//      } else if ("POST".equals(method)) {
//        ValidateUtil.isTrue(AuthUtil.hasSavePermission(), "권한이 없습니다.");
//      }
//    } catch (ValidateException e) {
//      logError(e, request);
//      if ("TRUE".equals(RequestUtil.getHeader(request, "AJAX"))) {
//        JsonResult jsonResult = new JsonResult();
//        jsonResult.setMsg(e.getMessage());
//        jsonResult.setCode(Code.FAIL);
//        ResponseUtil.writeJson(res, JsonUtil.toJson(jsonResult));
//      } else {
//        ResponseUtil.alertAndBack(res, e.getMessage());
//      }
//      return false;
//    }
    return true;
  }

//  private void logError(ValidateException e, HttpServletRequest request) {
//    String accept = request.getHeader("Accept");
//    String contentType = request.getContentType();
//    String method = request.getMethod();
//    String uri = request.getRequestURI();
//    String msg = String.format("uri:%s accept:%s content-type:%s method:%s", uri, accept, contentType, method);
//    log.error(msg);
//    log.error(e.getMessage() + "(" + e.getStrCause() + ")");
//  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
      ModelAndView modelAndView) throws Exception {
//    if (modelAndView != null) {
//      ModelMap modelMap = modelAndView.getModelMap();
//      String viewName = modelAndView.getViewName();
//      if (viewName != null && !viewName.startsWith("redirect:")) {
//        SessionAdmin sessionAdmin = AuthUtil.getSessionAdmin();
//        if (sessionAdmin != null) {
//          modelMap.addAttribute("_csrfToken", sessionAdmin.getCsrfToken());
//        }
//      }
//    }
  }
}