<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<style type="text/css">
#section4 {
	background: #f3f5f7;
}
#section4-contant{
	width: 100%;
	height: 100%;
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 15rem;
}
#section4-title {
    font-size: 5rem;
    font-weight: 600;
}
#section4-subtitle {	
	font-size: 2.5rem;
	padding-top: 2rem;
    color: #8ca0b7;
}
#section4-input-container {
	display: felx;
	position: relative;
	width: 100%;
	max-width: 80rem;
	margin-top: 4rem;
}
#section4-input-logoText {
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
#section4-input-logoText::placeholder {
    color: #aaa;
}
#section4-input-btn {
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
#section4-input-btn:hover {
    background: #8f5fff;
}
</style>
<div id="section4" class="section_page">
	<div id="section4-contant">
		<div id="section4-title">나만의 멋진 로고를 지금 만들어보세요.</div>
		<div id="section4-subtitle">간단한 몇 가지의 질의응답 통해 자신만의 로고를 제작할수 있습니다. 지금 LOGOYOGO와 함께 시작하세요!</div>
		<div id="section4-input-container">
			<input id="section4-input-logoText" placeholder="로고를 입력하세요"></input>
			<button id="section4-input-btn">시작하기</button>
		</div>
	</div>
</div>
<script src="${pageContext.request.contextPath}/resources/js/views/components/section4.js"></script>