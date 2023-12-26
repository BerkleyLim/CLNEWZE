package com.clnewze.back.clnewzeback.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	// 이 설정은 CORS 설정 때문에 지정한 API 표시
  @Override
  public void addCorsMappings(CorsRegistry registry) {
      registry
              .addMapping("/api/**")
              .allowCredentials(true)
              .allowedOriginPatterns("*")
              .allowedHeaders("*")
              .allowedMethods("*")
              .allowedOrigins("http://localhost:3000");
  }
  
  @Bean
  public LoginInterceptor loginInterceptor() {
    return new LoginInterceptor();
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {

    // 로그인시 제외url 리스트
    List<String> loginFreeList = new ArrayList<String>();

    loginFreeList.add("/error");
    loginFreeList.add("/api/user/signup");
    loginFreeList.add("/api/auth/authenticate");
    loginFreeList.add("/swagger-ui/**");
    // loginFreeList.add("/api/**");

    registry.addInterceptor(loginInterceptor()).addPathPatterns("/**").excludePathPatterns(loginFreeList);
  }
}
