package com.clnewze.back.clnewzeback.jwt;

import java.io.IOException;
import java.io.PrintWriter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import com.clnewze.back.clnewzeback.util.error.code.ErrorCode;
import com.clnewze.back.clnewzeback.util.error.code.ErrorResponse;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
  private final Logger logger = LoggerFactory.getLogger(JwtAccessDeniedHandler.class);

  // 필요 권한이 존재 하지 않을 때 차단
  @Override
  public void handle(HttpServletRequest request, HttpServletResponse response,
      AccessDeniedException accessDeniedException) throws IOException, ServletException {
    response.sendError(HttpServletResponse.SC_FORBIDDEN);
    PrintWriter writer = response.getWriter();
    // ErrorCode errorCode = ErrorCode.FORBIDDEN;
    // logger.info(errorCode.getMessage());
    logger.info("403 에러, 접근 거부로 차단");
    // // ResVO res = ResVO.builder()
    // // .status(errorCode.getResultCode())
    // // .message(errorCode.getResultMsg()).build();
    // try {
    // response.setContentType(MediaType.APPLICATION_JSON_VALUE);
    // // writer.write(CmmnVar.GSON.toJson(res));
    // } catch (NullPointerException e) {
    // logger.error("응답 메시지 작성 에러", e);
    // } finally {
    // if (writer != null) {
    // writer.flush();
    // writer.close();
    // }
    // }
    // response.getWriter().write(CmmnVar.GSON.toJson(res));
  }
}
