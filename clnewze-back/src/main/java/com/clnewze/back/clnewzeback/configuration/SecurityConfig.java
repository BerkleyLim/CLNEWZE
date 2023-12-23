package com.clnewze.back.clnewzeback.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.clnewze.back.clnewzeback.jwt.JwtAccessDeniedHandler;
import com.clnewze.back.clnewzeback.jwt.JwtAuthenticationEntryPoint;
import com.clnewze.back.clnewzeback.jwt.TokenProvider;

import lombok.RequiredArgsConstructor;

// 참조 : https://jiurinie.tistory.com/70
//        https://devuna.tistory.com/59 => 시큐리티 기초 참조
@Configuration
@EnableWebSecurity // 기본적인 Web 보안을 활성화한다
@RequiredArgsConstructor
// @EnableGlobalMethodSecurity(prePostEnabled = true) // @PreAuthorize 어노테이션을
// 메소드단위로 추가하기 위해
public class SecurityConfig { // 추가적인 설정을 위해 WebSecurityConfigurer를 implements 할 수도 있다

  private final TokenProvider tokenProvider;
  private final JwtAuthenticationEntryPoint jwtAtuthenticationEntryPoint;
  private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

  // 스프링 시큐리티가 사용자 인증을 담는 방법이 담긴 객체
  // protected void configure(AuthenticationManagerBuilder auth) throws Exception
  // 메소드 대행
  @Bean
  // public AuthenticationManager
  // authenticationManager(AuthenticationManagerBuilder
  // authenticationManagerBuilder)
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
      throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  // 스프링 시큐리티 룰을 무시하게 하는 Url 규칙(여기 등록하면 규칙 적용하지 않음)
  // 로그인 하지 않을 경우 전체적으로 공개적으로 표시
  // public void configure(HttpSecurity http) throws Exception
  @Bean
  public WebSecurityCustomizer webSecurityCustomizer() {
    return (web) -> web.ignoring()
        // .requestMatchers("/resources/**")
        // .requestMatchers("/css/**")
        // .requestMatchers("/vendor/**")
        // .requestMatchers("/js/**")
        // .requestMatchers("/favicon*/**")
        .requestMatchers("/api/**"); // 개발 모드할 때만 임시로 풀기

    // .requestMatchers("/api/teacher/selectList")
    // .requestMatchers("/api/teacher/master/menu/category")
    // .requestMatchers("/api/teacher/selectListAllCount")
    // .requestMatchers("/api/sheetmusic/selectList")
    // .requestMatchers("/api/sheetmusic/selectListAllCount")
    // .requestMatchers("/api/sheetmusic/master/menu/category")
    // .requestMatchers("/api/practiceroom/selectList")
    // .requestMatchers("/api/practiceroom/master/menu/category")
    // .requestMatchers("/api/practiceroom/selectListAllCount");
  }

  // 스프링 시큐리티 규칙
  // protected void configure(HttpSecurity http)
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        // token 사용 방식, csrf 비활성화
        .csrf(csrf -> csrf.disable())

        /** 401, 403 에러 설정 */
        .exceptionHandling(handling -> handling
            .authenticationEntryPoint(jwtAtuthenticationEntryPoint)
            .accessDeniedHandler(jwtAccessDeniedHandler))

        // 세션 비활성화
        .sessionManagement(management -> management
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))

        // 인증을 위한 확인을 위해 설정
        .authorizeHttpRequests(requests -> requests
            .requestMatchers("/api/auth/authenticate", "/api/user/signin", "/api/user/signup").permitAll()
        // .requestMatchers("/api/teacher/selectList").hasAnyAuthority("ROLE_USER")
        )

        // JWT configration
        .apply(new JwtSecurityConfig(tokenProvider));

    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
