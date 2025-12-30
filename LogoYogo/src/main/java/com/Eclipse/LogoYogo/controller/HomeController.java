package com.Eclipse.LogoYogo.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Eclipse.LogoYogo.domain.loginDTO;
import com.Eclipse.LogoYogo.mapper.LoginMapper;
import com.Eclipse.LogoYogo.service.LoginService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	@Autowired
	private LoginMapper mapper;
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	private LoginService loginService;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	/*
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	*/
	
	/*
	@RequestMapping(value = "test.do", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getLoginInfo(baseDTO explainVo) {		
		ModelAndView mv = new ModelAndView("jsonView");
		String id = "test";
		baseDTO test = new baseDTO();
		
		test.setId(id);
		
		test = mapper.testBaseDTO(test);
		
		System.out.println("########## id : " + test.getId());
		System.out.println("########## pw : " + test.getPw());
		
		Map<String, Object> res = new HashMap<>();
		res.put("result", "success");
		res.put("id", test.getId());
		res.put("pw", test.getPw());
		
		mv.addObject("id", test.getId());
		
		return res;
	}
	*/
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String main(Model model) {
		model.addAttribute("contentPage", "/WEB-INF/views/components/mainPage.jsp");
        return "layout";
    }
	
	@RequestMapping("/loginProcess")
	@ResponseBody
	public String loginProcess(@RequestParam String username, @RequestParam String password, HttpServletRequest request) {
		System.out.println("로그인 프로세스");
		System.out.println("로그인 id = " + username);
		System.out.println("로그인 pw = " + password);
		
		loginDTO tempDto = new loginDTO();
		tempDto.setUsername(username);
		tempDto.setPassword(password);
		
	    loginDTO user = loginService.getUserInfo(tempDto);

	    if (user == null) {
	        return "fail";
	    }

	    HttpSession session = request.getSession(true);

	    session.setAttribute("userinfo", user);
	    session.setMaxInactiveInterval(60 * 30);

	    return "success";
	}
	
	@RequestMapping("/logoutProcess")
	public String logout(HttpServletRequest request) {
		System.out.println("로그아웃 프로세스");		
	    request.getSession().invalidate();
	    return "redirect:/";
	}
	
	@RequestMapping("/checkDuplicatedId")
	@ResponseBody
	public String checkDuplicatedId(@RequestParam String username, HttpServletRequest request) {	
		System.out.println("아이디 중복 확인 ID : " + username);
		
		loginDTO tempDto = new loginDTO();
		tempDto.setUsername(username);
		
		loginDTO userId = loginService.getUserId(tempDto);
		
		if (userId != null) {
			System.out.println("아이디 중복");	
	        return "Duplicate";
	    }		
		
	    return "NoDuplicate";
	}
	
	// components 페이지 호출	
	@RequestMapping("/navi")
	public String getNavi() {
	    return "components/navi";
	}
	
	@RequestMapping("/mainPage.do")
	public String getPageHome(Model model) {
	    return "components/mainPage";
	}

	@RequestMapping("/section1.do")
	public String getPageSection1() {
	    return "components/section1";
	}

	@RequestMapping("/section2.do")
	public String getPageSection2() {
	    return "components/section2";
	}
	
	@RequestMapping("/section3.do")
	public String getPageSection3() {
	    return "components/section3";
	}
	
	@RequestMapping("/section4.do")
	public String getPageSection4() {
	    return "components/section4";
	} 
	
	@RequestMapping("/selectTemplate.do")
	public String getPageSelectTemplate() {
	    return "components/selectTemplate";
	}
	
	@RequestMapping("/selectShape.do")
	public String getPageSelectShape() {
	    return "components/selectShape";
	}
	
	@RequestMapping("/selectColor.do")
	public String getPageSelectColor() {
	    return "components/selectColor";
	}
	
	@RequestMapping("/selectArrange.do")
	public String getPageSelcetArrange() {
	    return "components/selectArrange";
	}
	
	@RequestMapping("/editor.do")
	public String getPageEditor() {
		return "components/editor";
	}
	
	@RequestMapping("/getDiagramSvgs")
	@ResponseBody
	public List<String> getDiagramSvgs(HttpServletRequest request) {

	    String realPath = request.getServletContext()
	            .getRealPath("/resources/images/diagram");

	    File dir = new File(realPath);

	    File[] files = dir.listFiles();
	    if (files == null) {
	        return Collections.emptyList();
	    }

	    return Arrays.stream(files)
	    	    .filter(f -> f.isFile() && f.getName().endsWith(".svg"))
	    	    .sorted(Comparator.comparingInt(f -> {
	    	        return Integer.parseInt(f.getName().replace(".svg", ""));
	    	    }))
	    	    .map(f -> request.getContextPath()
	    	        + "/resources/images/diagram/"
	    	        + f.getName()
	    	    )
	    	    .collect(Collectors.toList());
	}	
}
