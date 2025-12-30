package com.Eclipse.LogoYogo.mapper;

import com.Eclipse.LogoYogo.domain.baseDTO;
import com.Eclipse.LogoYogo.domain.loginDTO;

public interface LoginMapper {
	baseDTO testBaseDTO(baseDTO dto);
	loginDTO getUserInfo(loginDTO dto);
	loginDTO getUserId(loginDTO dto);
}
