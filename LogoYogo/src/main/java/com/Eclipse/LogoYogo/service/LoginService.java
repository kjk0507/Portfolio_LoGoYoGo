package com.Eclipse.LogoYogo.service;

import com.Eclipse.LogoYogo.domain.loginDTO;


public interface LoginService {
	loginDTO getUserInfo(loginDTO dto);
	loginDTO getUserId(loginDTO dto);
}
