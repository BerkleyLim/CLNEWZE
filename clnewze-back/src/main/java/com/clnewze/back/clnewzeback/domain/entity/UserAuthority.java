package com.clnewze.back.clnewzeback.domain.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserAuthority {
	private Long uno;
	private String authorityName;
}
