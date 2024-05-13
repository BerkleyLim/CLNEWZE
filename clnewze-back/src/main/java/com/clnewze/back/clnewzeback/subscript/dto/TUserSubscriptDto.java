package com.clnewze.back.clnewzeback.subscript.dto;

import java.time.ZonedDateTime;

import lombok.Data;

@Data
public class TUserSubscriptDto {
  private int usno; // 구독정보 인덱스
  private int uno; // 사용자 인덱스
  private int sno; // 타켓 구독자 인덱스
  private ZonedDateTime crtTime; // 첫 구독 날짜
  private String subClassify; // 구독 된 대상 등급
}
