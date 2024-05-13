package com.clnewze.back.clnewzeback.user.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserProfileDTO {
    // 스웨거 설정
    @Schema(description = "간략 소개", example = "안녕하세요 홍길동 입니다.")
    private String introduction;    // 간략 소개
    // 스웨거 설정
    @Schema(description = "전문 분야", example = "피아노")
    private String exportSpec;     // 전문분야
    // 스웨거 설정
    @Schema(description = "경력 사항", example = "3년")
    private String experience;      // 경력 사항
    // 스웨거 설정
    @Schema(description = "학력 및 전공", example = "이화여대 피아노 학과")
    private String education;       // 학력 및 전공
    // 스웨거 설정
    @Schema(description = "포트폴리오", example = "안녕하세요 홍길동 입니다.")
    private String portfolio;       // 포트폴리오
}
