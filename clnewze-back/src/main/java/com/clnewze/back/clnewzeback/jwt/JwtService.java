package com.clnewze.back.clnewzeback.jwt;

import java.util.Date;

import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;

// jwt 예시 참조 : https://velog.io/@ads0070/JWT-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%9D%B8%EC%A6%9D
@Service
public class JwtService {
  final String INVALID_JWT = "유효하지 않은 토큰입니다.";
  final String EMPTY_JWT = "토큰이 비어있습니다.";

  public String createJwt(int id) {
    Date now = new Date();

    return Jwts.builder()
        .setHeaderParam("type", "jwt")
        .claim("id", id)
        .setIssuedAt(now)
        .setExpiration(new Date(System.currentTimeMillis() + 1 * (1000 * 60 * 60 * 24 * 365)))
        .signWith(SignatureAlgorithm.HS256, SecretKey.JWT_SECRET_KEY)
        .compact();
  }

  public String getJwt() {
    HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
        .getRequest();
    return request.getHeader("X-ACCESS-TOKEN");
  }

  // TODO: JWT에서 값 추출
  public int getUserId() throws Exception {
    // 헤더에서 JWT 추출
    String accessToken = getJwt();
    if (accessToken == null || accessToken.length() == 0) {
      throw new Exception(EMPTY_JWT);
    }

    // JWT 파싱
    Jws<Claims> claims;
    try {
      claims = Jwts.parser()
          .setSigningKey(SecretKey.JWT_SECRET_KEY)
          .parseClaimsJws(accessToken);
    } catch (Exception ignored) {
      throw new Exception(INVALID_JWT);
    }

    // id 추출
    return claims.getBody().get("id", Integer.class);
  }
}
