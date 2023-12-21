package com.clnewze.back.clnewzeback.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;

@Component
public class TokenProvider implements InitializingBean {
  private final Logger LOGGER = LoggerFactory.getLogger(TokenProvider.class);

  private static final String AUTHORITIES_KEY = "CLNEWZE_API";

  private final String secret;
  private final long tokenValidityInMilliseconds;
  private Key key;

  public TokenProvider(@Value("${jwt.secret}") String secret,
      @Value("${jwt.token-validity-in-seconds}") long tokenValidityInMilliseconds) {
    this.secret = secret;
    this.tokenValidityInMilliseconds = tokenValidityInMilliseconds;
  }

  // 빈 생성 후, 주입 받은 후 secret 값을 Base64 Decode하여 key 변수 할당
  @Override
  public void afterPropertiesSet() throws Exception {
    byte[] keyBytes = Base64.getDecoder().decode(secret);
    this.key = Keys.hmacShaKeyFor(keyBytes);
  }

  /** token 생성 algorithm */
  public String createToken(Authentication authentication) {
    String authorities = authentication.getAuthorities().stream()
        .map(GrantedAuthority::getAuthority)
        .collect(Collectors.joining(","));

    // 토큰 expire 시간 설정
    long now = (new Date()).getTime();
    Date validity = new Date(now + this.tokenValidityInMilliseconds);

    return Jwts.builder()
        .setSubject(authentication.getName())
        .claim(AUTHORITIES_KEY, authorities)
        .signWith(SignatureAlgorithm.HS512, key)
        .setExpiration(validity)
        .compact();
  }

  /** 인증 정보 조회 */
  // 토큰에 플레임 만들고 이를 이용한 유저 객체 만들어 최종적으로 authentication 객체 리턴
  public Authentication getAuthentication(String token) {
    Claims claims = Jwts.parser()
        .setSigningKey(key)
        .parseClaimsJws(token)
        .getBody();
    Collection<? extends GrantedAuthority> authorities = Arrays
        .stream(claims.get(AUTHORITIES_KEY).toString().split(","))
        .map(SimpleGrantedAuthority::new)
        .collect(Collectors.toList());
    User principal = new User(claims.getSubject(), "", authorities);
    return new UsernamePasswordAuthenticationToken(principal, token, authorities);
  }

  /** token 유효성 검증 */
  public boolean validateToken(String token) {
    try {
      Jwts.parser().setSigningKey(key).parseClaimsJws(token);
      return true;
    } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
      LOGGER.info("잘못된 JWT 서명입니다.");
    } catch (ExpiredJwtException e) {
      LOGGER.info("만료된 JWT 토큰입니다.");
    } catch (UnsupportedJwtException e) {
      LOGGER.info("지원하지 않는 JWT 토큰입니다.");
    } catch (IllegalArgumentException e) {
      LOGGER.info("JWT 토큰이 잘못되었습니다.");
    }
    return false;
  }
}
