<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<style type="text/css">
#selectTemplate {
	display: flex;
	flex-direction: column;
}
#selectTemplate-header {
	background: #f8fcff;
	height: 18rem;
}
#selectTemplate-title {
	font-size: 3rem;	
	font-weight: 500;
	text-align: center;
	padding-top: 3rem;
}
#selectTemplate-description {
	font-size: 2rem;
	text-align: center;
	padding-top: 2rem;
    color: #8ca0b7;
}
#selectTemplate-content {
	display: flex;
    background: #f8fcff;
    
    height: calc(100vh - 30rem);
    overflow-y: auto;
    
    flex: 1;
}
#selectTemplate-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
}
.template {
    cursor: pointer;
}
.template img {
    width: 100%;
    height: auto;
    display: inline-block;
    border-radius: 0.5rem;
}
.template img:hover {
    outline: 3px solid #4CAF50;
    outline-offset: -3px;
}
#select-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    
    background: #ffffff;
    border-top: 1px solid #ddd;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 100;
}
#passEditor {
    width: 20%;
    height: 50%;
    background: rgb(161, 118, 255);
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid #ccc;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: clamp(1rem, 2vw, 2rem);
    color: white;
    text-align: center;
    word-break: keep-all;
    display: flex;
    flex-shrink: 0;
}
#passEditor:hover {
    background: rgb(141, 98, 235);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
</style>
<div id="selectTemplate">
<div id="selectTemplate-header">
	<div id="selectTemplate-title">원하는 템플릿을 선택하세요</div>
	<div id="selectTemplate-description">원하는 템플릿을 선택하여 로고로 사용해보세요. 또는 하단의 버튼을 클릭하여 처음부터 만들 수도 있습니다.</div>
</div>
<div id="selectTemplate-content">
	<div id="selectTemplate-container">
		<div class="template" data-id="0">
		    <img src="/resources/images/template/template01.png">
		</div>
		<div class="template" data-id="1">
		    <img src="/resources/images/template/template02.png">
		</div>
		<div class="template" data-id="2">
		    <img src="/resources/images/template/template03.png">
		</div>
	</div>
</div>
<div id="select-footer">
	<div id="passEditor">빈 캔버스에서 직접 로고 만들기</div>
</div>
</div>

<script src="${pageContext.request.contextPath}/resources/js/views/components/selectTemplate.js"></script>