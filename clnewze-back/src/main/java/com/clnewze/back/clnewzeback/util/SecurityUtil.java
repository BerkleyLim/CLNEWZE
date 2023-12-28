package com.clnewze.back.clnewzeback.util;

public class SecurityUtil {
  /**
   * 패스워드 암호화
   *
   * @param password 패스워드 평문
   * @return
   */
  public static String encodePassword(String password) {
    return BCrypt.hashpw(password, BCrypt.gensalt());
  }

  /**
   * 암호화된 패스워드 비교
   *
   * @param password 패스워드 평문
   * @param hashed   암호화 된 패스워드
   * @return 일치하면 true
   */
  public static Boolean checkPassword(String password, String hashed) {
    return BCrypt.checkpw(password, hashed);
  }

}
