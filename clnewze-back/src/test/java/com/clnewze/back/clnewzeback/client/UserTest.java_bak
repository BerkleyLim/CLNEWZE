package com.clnewze.back.clnewzeback.client;

import org.apache.http.Header;
import org.apache.http.message.BasicHeader;
import org.junit.jupiter.api.Test;

import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.util.HttpUtil;
import com.clnewze.back.clnewzeback.util.JsonUtil;

public class UserTest {

  @Test
  public void 회원가입_테스트() {
    String url = CommonLoginTest.HOST + "/api/user/signup";
    Header[] headers = new BasicHeader[1];
    headers[0] = new BasicHeader("Content-Type", "application/json");
    TUser tUser = new TUser();
    tUser.setId("tt001");
    tUser.setPassword("1234");
    tUser.setUserName("티티일");
    String requestBody = JsonUtil.toJson(tUser);
    String responseBody = HttpUtil.post(url, headers, requestBody, "UTF-8");
    System.out.println(JsonUtil.toPrettyJson(requestBody));
    System.out.println(JsonUtil.toPrettyJson(responseBody));
  }

  @Test
  public void 내정보조회_테스트() {
    String url = CommonLoginTest.HOST + "/api/user/myinfo";
    Header[] headers = new BasicHeader[2];
    headers[0] = new BasicHeader("Content-Type", "application/json");
    headers[1] = new BasicHeader("Authorization", "Bearer " + AuthTest.getToken()); // JWT인증
    String responseBody = HttpUtil.get(url, headers, "UTF-8");
    System.out.println(JsonUtil.toPrettyJson(responseBody));
  }

  @Test
  public void 모든회원목록조회_테스트() {
    String url = CommonLoginTest.HOST + "/api/user/";
    Header[] headers = new BasicHeader[2];
    headers[0] = new BasicHeader("Content-Type", "application/json");
    headers[1] = new BasicHeader("Cookie", CommonLoginTest.loginAdmin());// 세션인증, ADMIN 로그인
    String responseBody = HttpUtil.get(url, headers, "UTF-8");
    System.out.println(JsonUtil.toPrettyJson(responseBody));
  }

}