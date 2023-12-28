package com.clnewze.back.clnewzeback.client;

import org.apache.http.Header;
import org.apache.http.message.BasicHeader;
import org.junit.jupiter.api.Test;

import com.clnewze.back.clnewzeback.domain.dto.LoginDto;
import com.clnewze.back.clnewzeback.util.HttpUtil;
import com.clnewze.back.clnewzeback.util.JsonUtil;

public class CommonLoginTest {
  public static final String HOST = "http://localhost:8080";

  public static String loginUser() {
    String url = HOST + "/api/user/signin";
    Header[] headers = new BasicHeader[1];
    headers[0] = new BasicHeader("Content-Type", "application/json");
    LoginDto loginDto = new LoginDto();
    loginDto.setId("tt001");
    loginDto.setPassword("1234");
    String requestBody = JsonUtil.toJson(loginDto);
    String cookie = HttpUtil.login(url, headers, requestBody, "UTF-8");
    return cookie;
  }
  
  public static String loginAdmin() {
    String url = HOST + "/api/user/signin";
    Header[] headers = new BasicHeader[1];
    headers[0] = new BasicHeader("Content-Type", "application/json");
    LoginDto loginDto = new LoginDto();
    loginDto.setId("admin");
    loginDto.setPassword("admin1234");
    String requestBody = JsonUtil.toJson(loginDto);
    String cookie = HttpUtil.login(url, headers, requestBody, "UTF-8");
    return cookie;
  }

  @Test
  public void loginTest() {
    System.out.println(CommonLoginTest.loginUser());
  }

}