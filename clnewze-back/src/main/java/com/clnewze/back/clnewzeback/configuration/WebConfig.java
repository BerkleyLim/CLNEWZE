package com.clnewze.back.clnewzeback.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// 이 설정은 CORS 설정 때문에 지정한 API 표시
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/api/**")
                // .allowedOrigins("http://35.90.180.8:3000");
                .allowedOrigins("http://localhost:3000");
    }
}
