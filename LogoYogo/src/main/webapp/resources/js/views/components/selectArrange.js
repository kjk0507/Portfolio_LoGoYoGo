// --------------------------- js 시작 --------------------------- //
(() => {
document.querySelectorAll('.selectArrange-pos').forEach(item => {
    item.addEventListener('click', () => {
		var pos = item.dataset.pos;
		
        var selectData = getSelectData();
        selectData.pos = pos;

        setSelectData(selectData);
		
		console.log("pos :"+ pos);
		$("#content").load("/editor.do", function () {
	        window.scrollTo(0, 0);
	    });
    });
});

document.getElementById('passEditor').addEventListener('click', e => {
	e.preventDefault();	
	sessionStorage.removeItem('selectData');
	$("#content").load("/editor.do", function () {
        window.scrollTo(0, 0);
    });
})

function getSelectData() {
    const raw = sessionStorage.getItem('selectData');
    if (!raw) return null;
    return JSON.parse(raw);
}

function setSelectData(data) {
    sessionStorage.setItem('selectData', JSON.stringify(data));
}
// --------------------------- js 밑단 --------------------------- //
})();