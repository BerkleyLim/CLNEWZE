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
public class TUserUpdateDTO {
    // 스웨거 설정
    @Schema(description = "회원번호", example = "1")
    private Long uno;
}
