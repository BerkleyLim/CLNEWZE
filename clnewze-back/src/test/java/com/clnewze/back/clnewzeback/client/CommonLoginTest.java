package com.clnewze.back.clnewzeback.client;

import org.apache.http.Header;
import org.apache.http.message.BasicHeader;
import org.junit.jupiter.api.Test;

import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.util.HttpUtil;
import com.clnewze.back.clnewzeback.util.JsonUtil;

public class CommonLoginTest {
  public static final String HOST = "http://localhost:8080";

  public static String login() {
    String url = HOST + "/api/user/signin";
    Header[] headers = new BasicHeader[1];
    headers[0] = new BasicHeader("Content-Type", "application/json");
    TUser tUser = new TUser();
    tUser.setId("test2");
    tUser.setPassword("1234");
    String requestBody = JsonUtil.toJson(tUser);
    String cookie = HttpUtil.login(url, headers, requestBody, "UTF-8");
    return cookie;
  }

  @Test
  public void loginTest() {
    System.out.println(CommonLoginTest.login());
  }

}