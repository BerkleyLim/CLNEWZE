package com.clnewze.back.clnewzeback.domain.dto;

import java.time.ZonedDateTime;

import lombok.Data;

@Data
public class T_User_Subscript {
  private int usno; // 구독정보 인덱스
  private int uno; // 사용자 인덱스
  private int sno; // 타켓 구독자 인덱스
  ZonedDateTime crtTime; // 첫 구독 날짜
  String subClassify; // 구독 된 대상 등급
}
