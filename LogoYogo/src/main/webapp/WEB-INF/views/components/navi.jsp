<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<style type="text/css">
#navi {
	flex-shrink: 0; 
	height: 7rem;
	background: #4665d9;
	color: white;
	z-index: 1000;  
	display: flex;
    align-items: center;
    justify-content: space-between;
}
#navi-title {
	margin-left: 2rem;
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	padding-bottom: 1rem;
	cursor: pointer;	
	width: 15rem;
	text-align: center;
    letter-spacing: 0.2rem;
    color: white;
    font-weight: 1000;
}
#navi-sign-area {
	padding-right: 5rem;
}
#non-sign-section,
#sign-in-section {
	width: 100%;
    display: flex;
    gap: 2rem;
    font-size: 2rem;
    font-weight: 500;
}
.sign-btn {
	cursor: pointer;
}
.sign-btn:hover {
    color: #e3e6ee;
}
#navi-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
#navi-modal {
    background: white;
    padding: 2.5rem;
    position: relative;    
    border-radius: 0.5rem;
}
#navi-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    cursor: pointer;
    font-size: 3rem;
}
#navi-modal-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}
#navi-modal-logo {
	width: 15rem;
	text-align: center;
    font-size: 2.4rem;
    font-family: "Questrial";
    letter-spacing: 0.2rem;
    font-weight: 600;

    background: linear-gradient(
        90deg,
        rgb(70, 101, 217) 0%,
        rgb(161, 118, 253) 100%
    );

    -webkit-text-fill-color: transparent;
    background-clip: text;
}
#navi-modal-description {
	font-size: 2.4rem;
    font-weight: 500;
}
.navi-form {
	display: flex;
	flex-direction: column;
}
.navi-form input {
	border: none;
    border-bottom: 2px solid #ccc;
    padding: 10px 5px;
    padding-left: 1.5rem;
    font-size: 16px;
    outline: none;
    background: transparent;
    transition: border-color 0.3s;
    width: 40rem;
    margin-top: 1rem;
}
.navi-form input:focus {
    border-bottom: 2px solid #4a7cff;
}
.navi-form-btn {
	height: 5rem;
	width: 100%;
	border: none;
	border-radius: 0.5rem;
	font-size: 2rem;
	text-alien: center;
	background: #a176ff;
	color: #ffffff;
	font-size: 2rem;
	cursor: pointer;
	margin-top: 2rem;
}
.navi-modal-comment {
	text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
}
.navi-modal-comment span{
	color: #a176ff;
}
#signup-error {
	text-align: center;
	font-size: 1.2rem;
    font-weight: 500;
}
.navi-modal-error {
	height: 2.4rem;
	font-size: 1rem;
	color: red; 
	visibility: hidden;
	text-align: center;
}
.error-msg {
    height: 1.4rem;
    font-size: 1rem;
    color: red;
    margin-top: 0.5rem;
    visibility: hidden;
    padding-left: 1.5rem;
}
.hidden{
	display: none !important;
}
</style>

<div id="navi">
	<div id="navi-title">LogoYogo</div>
	<span style="">
	<a href="#" data-url="/mainPage.do" class="nav-link">메인</a>
	<a href="#" data-url="/section1.do" class="nav-link">Section1</a>
	<a href="#" data-url="/section2.do" class="nav-link">Section2</a>
	<a href="#" data-url="/selectTemplate.do" class="nav-link">selectTemplate</a>
	<a href="#" data-url="/selectShape.do" class="nav-link">SelectShape</a>
	<a href="#" data-url="/selectColor.do" class="nav-link">SelectColor</a>
	<a href="#" data-url="selectArrange.do" class="nav-link">selectArrange</a>
	<a href="#" data-url="/editor.do" class="nav-link">editor</a>
	</span>
	<div id="navi-sign-area">
		<c:if test="${empty sessionScope.userinfo}">
		<div id="non-sign-section">
			<div id="sign-in-btn" class="sign-btn">로그인</div>
			<div id="sign-up-btn" class="sign-btn">회원가입</div>
		</div>
		</c:if>
		<c:if test="${not empty sessionScope.userinfo}">
		<div id="sign-in-section">
			<div id="my-info" class="sign-btn">내 정보</div>
			<div id="sign-out-btn" class="sign-btn">로그아웃</div>
		</div>
		</c:if>
	</div>
</div>
<!-- modal -->
<div id="navi-overlay" class="hidden">
    <div id="navi-modal">
    	<span id="navi-modal-close"><i class="fa-solid fa-xmark"></i></span>
    	<div id="modal-sign-in">
	    	<div id="navi-modal-header">
	    		<div id="navi-modal-logo">LogoYogo</div>
	    		<div id="navi-modal-description">로그인</div>
	    	</div>
	    	<div id="navi-modal-container">    		
	    		<form id="signinForm" class="navi-form">
			        <input type="text" name="username" placeholder="아이디" required />
			        <div class="error-msg"></div>
			        <input type="password" name="password" placeholder="비밀번호" required />			
			        <button type="submit" class="navi-form-btn">로그인</button>
			        <div class="error-msg"></div>			
			        <div id="signin-error" class="navi-modal-error">
			            아이디 또는 비밀번호가 틀렸습니다.
			        </div>
			    </form>
	    	</div>
	    	<div class="navi-modal-comment">아직 회원이 아니신가요?
	    		<span id="navi-modal-change-signup">회원가입</span>
    		</div>
    	</div>
    	<div id="modal-sign-up">
	    	<div id="navi-modal-header">
	    		<div id="navi-modal-logo">LogoYogo</div>
	    		<div id="navi-modal-description">회원가입</div>
	    	</div>
	    	<div id="navi-modal-container">    	
	    		<form id="signupForm" class="navi-form">
				    <input type="text" id="signup-form-name" name="username" placeholder="아이디" />
				    <div class="error-msg" id="id-error"></div>				
				    <input type="text" name="nickname" placeholder="닉네임" />
				    <div class="error-msg"></div>
				    <input type="password" id="signup-form-password" name="password" placeholder="비밀번호" />
				    <div class="error-msg" id="pw-error"></div>				
				    <input type="password" id="signup-form-passwordConfirm" name="passwordConfirm" placeholder="비밀번호 확인" />
				    <div class="error-msg" id="pw-confirm-error"></div>				
				    <button type="submit" class="navi-form-btn">회원가입</button>
				    <div id="signup-error" class="navi-modal-error">
			            DB 보안상 회원가입이 실제로 되지 않습니다. <br>test / 1234 로 로그인 해주시기 바랍니다.
			        </div>
				</form>    		
	    	</div>
	    	<div class="navi-modal-comment">이미 회원이신가요?
	    		<span id="navi-modal-change-signin">로그인</span>
    		</div>
    	</div>
    </div>
</div>
<script>
    const CONTEXT_PATH = "${pageContext.request.contextPath}";
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/views/components/navi.js"></script>