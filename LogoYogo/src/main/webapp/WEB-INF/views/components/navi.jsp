<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<style type="text/css">
#navi {
	flex-shrink: 0; 
	height: 7rem;
	background: #4665d9;
	color: white;
	z-index: 1000;  
	display: flex;
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
</style>

<div id="navi">
	<div id="navi-title">LogoYogo</div>
	<span style="">
	<a href="#" data-url="/mainPage.do" class="nav-link">메인</a>
	<a href="#" data-url="/section1.do" class="nav-link">Section1</a>
	<a href="#" data-url="/section2.do" class="nav-link">Section2</a>
	<a href="#" data-url="/selectShape.do" class="nav-link">SelectShape</a>
	<a href="#" data-url="/selectColor.do" class="nav-link">SelectColor</a>
	<a href="#" data-url="selectArrange.do" class="nav-link">selectArrange</a>
	<a href="#" data-url="/editor.do" class="nav-link">editor</a>
	</span>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/views/components/navi.js"></script>