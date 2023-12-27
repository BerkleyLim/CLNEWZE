package com.clnewze.back.clnewzeback.configuration;



import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class ApiUiConfig {
  public static final String API = "/api";

  @Bean
  public GroupedOpenApi musicGroup() {
    final StringBuffer description = new StringBuffer();
    try (InputStream inputStream = getClass().getResourceAsStream("/md/api.md")) {
      if (inputStream != null) {
        description.append(new String(inputStream.readAllBytes(), StandardCharsets.UTF_8));
      }
    } catch (IOException e) {
      log.error("API설명 파일 로딩 실패");
    }

    Server server1 = new Server();
    server1.setUrl("/");
    server1.setDescription("기본 API 서버");

    final String securitySchemeName = "BearerAuth";

    return GroupedOpenApi//
        .builder()//
        .group("music")//
        .pathsToMatch(API + "/**")//
        .addOpenApiCustomizer(openApi -> {
          openApi.info(//
              new Info()//
                  .title("기본 API")//
                  .version("1.0")//
                  .description(description.toString())//
          );
          openApi.setServers(Arrays.asList(server1));

          openApi.addSecurityItem(new SecurityRequirement().addList(securitySchemeName));
          openApi.getComponents().addSecuritySchemes(securitySchemeName,
              new SecurityScheme().name(securitySchemeName).type(SecurityScheme.Type.HTTP).scheme("bearer")//
                  // .bearerFormat("JWT")//
                  .description("[설정 및 정보](/mypage" + ") 페이지에서 발급 받은 **API KEY**를 입력해주세요.")//
          );
        })//
        .packagesToScan("com.clnewze.back.clnewzeback.controller")//
        .build();
  }
}
