package com.clnewze.back.clnewzeback.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
  // 이 설정은 CORS 설정 때문에 지정한 API 표시
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/api/**").allowCredentials(true).allowedOriginPatterns("*").allowedHeaders("*")
        .allowedMethods("*").allowedOrigins("http://localhost:3000");
  }

  @Bean
  public LoginInterceptor loginInterceptor() {
    return new LoginInterceptor();
  }
  
  @Bean
  public JwtInterceptor jwtInterceptor() {
    return new JwtInterceptor();
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {

    // 세션 인증 url 리스트
    List<String> sessionUrlList = new ArrayList<String>();
    sessionUrlList.add("/api/user/");
    
    // JWT 인증 url 리스트
    List<String> jwtUrlList = new ArrayList<String>();
    jwtUrlList.add("/api/user/myinfo");

    registry.addInterceptor(loginInterceptor()).addPathPatterns(sessionUrlList);
    registry.addInterceptor(jwtInterceptor()).addPathPatterns(jwtUrlList);
  }
  
  @Override
  public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
    argumentResolvers.add(new CurrentUserArgumentResolver());
  }
}
