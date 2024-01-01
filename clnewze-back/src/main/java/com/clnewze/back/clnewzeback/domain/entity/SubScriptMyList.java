package com.clnewze.back.clnewzeback.domain.entity;

import java.time.ZonedDateTime;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

// 내가 구독한 사람의 대한 Entity 결과 값
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SubScriptMyList {
  private String myName; // 나를 지칭하는 이름
  private String nickName; // 나의 닉네임
  private String userName; // 구독 대상자
  private String subClassify; // 구독 등급
  private ZonedDateTime crtTime; // 구독 날짜
}
