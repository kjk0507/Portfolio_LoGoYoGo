// --------------------------- js 시작 --------------------------- //
(() => {
document.getElementById('section4-input-btn').addEventListener('click', e => {
	e.preventDefault();		
	
	var logoText = document.getElementById('section4-input-logoText').value;
	if(logoText == ""){
		logoText = "텍스트 박스";
	}
	
	var selectData = getSelectData();		
	selectData.text = logoText;
					
	setSelectData(selectData);				

    $("#content").load("/selectShape.do", function () {
        window.scrollTo(0, 0);
    });
})

function getSelectData() {
    return JSON.parse(sessionStorage.getItem('selectData')) || {};
}

function setSelectData(data) {
    sessionStorage.setItem('selectData', JSON.stringify(data));
}
// --------------------------- js 밑단 --------------------------- //
})();