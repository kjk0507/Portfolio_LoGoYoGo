package com.Eclipse.LogoYogo.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Eclipse.LogoYogo.domain.loginDTO;
import com.Eclipse.LogoYogo.mapper.LoginMapper;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginMapper loginMapper;

    @Override
    public loginDTO getUserInfo(loginDTO dto) {   	
        return loginMapper.getUserInfo(dto);
    }        
    
    @Override
    public loginDTO getUserId(loginDTO dto) {
    	return loginMapper.getUserId(dto);
    }
}
