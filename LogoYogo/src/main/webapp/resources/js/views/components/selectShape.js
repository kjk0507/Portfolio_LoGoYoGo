// --------------------------- js 시작 --------------------------- //
(() => {
function getDiagramSvgs(){
	fetch(ctx + '/getDiagramSvgs')
	.then(res => res.json())
	.then(svgs => {
		svgs.forEach((path, idx) => {
			var btn = document.createElement('button');
			btn.className = 'svg-select-btn';
			btn.title = 'SVG ' + (idx + 1);
			var img = document.createElement('img');
			img.src = path; btn.appendChild(img);
			var content = document.getElementById('selectShape-container');
			content.appendChild(btn);
			
			btn.addEventListener('click', e => {
				e.preventDefault();				
				
				var selectData = getSelectData();				
				selectData.path = path;
				
				setSelectData(selectData);				

			    $("#content").load("/selectColor.do", function () {
			        window.scrollTo(0, 0);
			    });
			});
		});
	});
}

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

getDiagramSvgs();
// --------------------------- js 밑단 --------------------------- //
})();