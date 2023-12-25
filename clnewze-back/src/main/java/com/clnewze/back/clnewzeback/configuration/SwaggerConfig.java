package com.clnewze.back.clnewzeback.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.List;
import java.util.Arrays;

@Configuration
public class SwaggerConfig {
  public static final String AUTHORIZATION_HEADER = "Authorization";

  // 이 안에 있는 메소드 중 apis : API 컨트롤러 패키지 경로
  // paths : Swagger에서 사용할 API 인증 방식 목록
  @Bean
  public Docket api() {
    return new Docket(DocumentationType.SWAGGER_2).securityContexts(
        Arrays.asList(securityContext())).securitySchemes(Arrays.asList(apiKey())).select()
        .apis(RequestHandlerSelectors.any()).paths(PathSelectors.any()).build();
  }

  // jwt 기반으로 ApiKey 발급
  public ApiKey apiKey() {
    return new ApiKey("JWT", AUTHORIZATION_HEADER, "header");
  }

  // API 작업에 사용할 기본 인증 방식 목록
  private SecurityContext securityContext() {
    return SecurityContext.builder().securityReferences(defaultAuth()).build();
  }

  // 패키지 경로
  List<SecurityReference> defaultAuth() {
    AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
    AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
    authorizationScopes[0] = authorizationScope;
    return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
  }
}
