package com.Eclipse.LogoYogo.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.Eclipse.LogoYogo.domain.loginDTO;

//@Component
public class AuthProvider  implements AuthenticationProvider{
	@Autowired
    private LoginService loginService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
    	System.out.println("AUTH PROVIDER HIT");
        System.out.println("AUTH CLASS = " + authentication.getClass());
        
        Object principal = authentication.getPrincipal();
        Object credentials = authentication.getCredentials();

        System.out.println("principal = " + principal);
        System.out.println("credentials = " + credentials);
    	
        String id = authentication.getName();
        String pw = (String) authentication.getCredentials();
        loginDTO dto = new loginDTO();
        dto.setUsername(id);
        dto.setPassword(pw);
        
        System.out.println("로그인 시도 ID: " + id);
        System.out.println("로그인 시도 PW: " + pw);

        
        loginDTO user = loginService.getUserInfo(dto);        

        if (user == null) {
            throw new BadCredentialsException("로그인 실패");
        }

        return new UsernamePasswordAuthenticationToken(id, pw, Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
    }

    @Override
    public boolean supports(Class<?> auth) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(auth);
    }
}