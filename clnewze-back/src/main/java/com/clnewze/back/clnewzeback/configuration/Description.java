package com.clnewze.back.clnewzeback.configuration;

public class Description {
  public static final String ERROR_USERNAME = "{\r\n"//
      + "  \"message\": \"The given data was invalid.\",\r\n"//
      + "}";
  public static final String ERROR_401 = "{\r\n"//
      + "  \"message\": \"인증에 실패하였습니다.\"\r\n"//
      + "}";
  public static final String ERROR_403 = "{\r\n"//
      + "  \"message\": \"권한이 없습니다.\"\r\n"//
      + "}";
  public static final String ERROR_404 = "{\r\n"//
      + "  \"message\": \"정보를 찾을 수 없습니다.\"\r\n"//
      + "}";
  public static final String ERROR_422 = "{\r\n"//
      + "  \"message\": \"요청 파라미터를 확인해 주세요.\"\r\n"//
      + "}";
  public static final String SIGNUP = ""//
      + "회원가입 정보<br/>"//
      + "<br/>"//
      + "아이디는 최소 3글자 이상의 문자열이어야 합니다.<br/>"//
      + "아이디는 영문,숫자,언더바(_),하이픈(-) 문자열로 구성되어야 합니다.<br/>"//
      + "<br/>"//
      + "아이디는 대소문자를 구분하지 않습니다.<br/>"//
      + "예를 들어 아이디 `abcd1234`와 `ABCD1234`는 동일한 유저를 의미합니다.";
  public static final String USER_ID = "유저 아이디에 대한 정보";

}
