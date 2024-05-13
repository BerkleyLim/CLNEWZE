package com.clnewze.back.clnewzeback.auth.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserAuthority {
	private Long uno;
	private String authorityName;
}
