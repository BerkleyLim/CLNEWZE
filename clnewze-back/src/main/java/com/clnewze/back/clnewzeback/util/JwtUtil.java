package com.clnewze.back.clnewzeback.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

public class JwtUtil {

  private static final String SECRET_KEY = "yourSecretKey"; // 실제 애플리케이션에서는 보안을 위해 외부에서 주입

  // JWT 토큰 생성
  public static String generateToken(String id, String role, String userName) {
    long nowMillis = System.currentTimeMillis();
    Date now = new Date(nowMillis);
    long expMillis = nowMillis + 3600000; // 1시간 후 만료
    Date exp = new Date(expMillis);

    return Jwts.builder()//
        .setSubject(id)//
        .claim("role", role)//
        .claim("userName", userName)//
        .setIssuedAt(now)//
        .setExpiration(exp)//
        .signWith(SignatureAlgorithm.HS256, SECRET_KEY)//
        .compact();
  }

  // JWT 토큰 검증
  public static boolean validateToken(String token, String username) {
    String subject = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();
    return (username.equals(subject) && !isTokenExpired(token));
  }

  private static boolean isTokenExpired(String token) {
    Date expiration = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getExpiration();
    return expiration.before(new Date());
  }

  public static Claims getClaims(String token) {
    return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
  }

  public static String getUsernameFromToken(String token) {
    return getClaims(token).getSubject();
  }

  public static String getRoleFromToken(String token) {
    return getClaims(token).get("role", String.class);
  }

}
