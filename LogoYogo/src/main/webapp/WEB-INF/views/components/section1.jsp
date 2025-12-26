<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<style type="text/css">
#section1 {
	background: #4665d9;
}
#section1-contant{
	width: 100%;
	height: 100%;
	display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10rem;
}
#section1-title {
    font-size: 6rem;
    font-weight: 600;
    color: #ffffff;
}
#section1-subtitle {	
	font-size: 2.5rem;
	padding-top: 2rem;
	color: #ffffff;
}
#section1-container1 {
	display: flex;
    flex-direction: column;
    min-width: 60rem;
    max-width: 70rem;
    padding-bottom: 10rem;
    z-index: 3;
}
#section1-input-container {
	display: felx;
	position: relative;
	margin-top: 4rem;
}
#section1-input-logoText {
	height: 5rem;
	width: 100%;
    flex: 1;
    border: none;
    border-right: none;
    border-radius: 0.5rem;
    padding: 0 1rem;
    padding-left: 1.5rem;
    font-size: 2rem;
    outline: none;
}
#section1-input-logoText::placeholder {
    color: #aaa;
}
#section1-input-btn {
    position: absolute;
    right: 0%;
    width: 11rem;
    height: 5rem;
    border: none;
    border-left: none;
    border-radius: 0 0.5rem 0.5rem 0;
    background: #a176ff;
    color: #ffffff;
    cursor: pointer;
    font-size: 2rem;
    transition: background 0.2s;
}
#section1-input-btn:hover {
    background: #8f5fff;
}
#section1-logo-template {
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
#section1-container2 {
	display: flex;
	max-width: 60rem;
    min-width: 30rem;
    transform: scaleX(-1);
    margin: 10rem;
    padding-bottom: 10rem;
    padding-left: 10rem;
    z-index: 3;
}
#section1-container3 {
    width: 90rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    transform: rotate(45deg);
    z-index: 1;
    bottom: 0rem;
    left: -50rem;

    &:before {
	    width: 100%;
	    height: 100%;
	    padding-bottom: 100%;
	    background: linear-gradient(
	      90deg,
	      rgba(67, 94, 212, 1) 0%,
	      rgba(52, 78, 207, 1) 100%
	    );
	    content: "";
	    position: absolute;
    }
}
#section1-container4 {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 60rem;
	right: 0vw;
	
	transform: rotate(58deg);
	
	&:before {
		width: 70rem;
		height: 130rem;
		padding-bottom: 100%;
		border-radius: 18rem;
		background: #1d243a;
		
		opacity: 0.7;
		
		content: "";
		position: absolute;
	}
}

</style>
<div id="section1" class="section_page">
	<div id="section1-contant">
		<div id="section1-container1">
			<div id="section1-title">LOGO는 어디서?<br />LOGOYOGO에서!</div>
			<div id="section1-subtitle">과제, 프로젝트에 쓸 로고가 필요한가요?<br> 누구나 3분이면 간단히 만들 수 있습니다. <br> 아래 로고를 입력하고 지금 바로 시작해보세요.</div>
			<div id="section1-input-container">
				<input id="section1-input-logoText" placeholder="로고를 입력하세요"></input>
				<button id="section1-input-btn">시작하기</button>
			</div>
			<button id="section1-logo-template">다른 사용자의 템플릿 둘러보기</button>
		</div>
		<div id="section1-container2">
			<img id="section1-img" src="/resources/images/mainPage/landing1.png" style="width: 100%"/>
		</div>
		<div id="section1-container3"></div>
		<div id="section1-container4"></div>
	</div>
</div>
<script src="${pageContext.request.contextPath}/resources/js/views/components/section1.js"></script>