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

}