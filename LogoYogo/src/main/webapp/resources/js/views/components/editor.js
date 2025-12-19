// --------------------------- 기본 설정 --------------------------- //
// tab 관련
var activeTab = null;
var tab = document.getElementById('editor-tab');
var tabBtn = document.querySelectorAll('#editor-tab-button .tab-btn');

var tabPalette = document.getElementById('editor-tab-palette');
var tabText = document.getElementById('editor-tab-text');
var tabShape = document.getElementById('editor-tab-shape');

tabBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		var tabName = btn.dataset.tab;
		console.log("tabname : " + tabName);

		if (activeTab == tabName) {
			closeTab();
		} else {
			openTab(tabName);
		}
	});
});

// 모든 탭 숨기기
function hideAllTab(){
	tabPalette.classList.add('hidden');
	tabText.classList.add('hidden');
	tabShape.classList.add('hidden');	
}

// 탭 보여주기
function showSelectTab(tabName){
	hideAllTab();
	switch (tabName) {
  		case "btn-tap-palette":			
			tabPalette.classList.remove('hidden');
    		break;
		case "btn-tap-text":
			tabText.classList.remove('hidden');
			break;
		case "btn-tap-shape":
			tabShape.classList.remove('hidden');	
			break;
	}
}

function openTab(tabName) {
	if (activeTab == tabName) return;

	//tab.innerHTML = tabRenderers[tabName]();
	tab.classList.add('is-open');
	activeTab = tabName;
	showSelectTab(tabName);
}

function closeTab() {
	tab.classList.remove('is-open');

	tab.addEventListener('transitionend', function handler() {
		//tab.innerHTML = '';
		activeTab = null;
		tab.removeEventListener('transitionend', handler);
	});
}

// ---------------------------  에디터 캔버스 관련 --------------------------- //
// 캔버스 관련
var canvas = new fabric.Canvas('baseCanvas', {
	backgroundColor: '#ffffff'
});

//canvas.setBackgroundColor('#a0d8f1', () => {
//   canvas.renderAll();
//});

var activeShape = null;
var activeText = null;

canvas.on('selection:created', canvaseSelect);
canvas.on('selection:updated', canvaseSelect);
canvas.on('selection:cleared', clearCanvaseSelect);
canvas.on('object:scaling', canvasObjectResize);
canvas.on('object:modified', canvasObjectResize);

function canvaseSelect(e){
	var obj = e.selected[0];

    activeShape = null;
    activeText = null;

	// 텍스트 박스인 경우
    if (obj.type === 'textbox') {
        activeText = obj;
    } 
    else {
		// 텍스트 박스가 아닌경우
        activeShape = obj;
    }
	
	updateSizeEditor(obj);
	updateColorEditor(obj);	
}

function clearCanvaseSelect(){
	activeShape = null;
	activeText = null;
}

function canvasObjectResize(e) {
    var obj = e.target;
    if (!obj) return;
	updateSizeEditor(obj);
}

// ---------------------------  에디터 팔레트 버튼 --------------------------- //

// ---------------------------  에디터 텍스트 버튼 --------------------------- //
var textInput = document.getElementById('text-input-box');
var textSizeSlider = document.getElementById('text-size-slider');
var textSizeValue = document.getElementById('text-size-value');
var textWeightSlider = document.getElementById('text-weight-slider');
var textWeightValue = document.getElementById('text-weight-value');
var textFontSelect = document.getElementById('text-font-select');
var textAlineLeft = document.getElementById('text-aline-left');
var textAlineCenter = document.getElementById('text-aline-center');
var textAlineRight = document.getElementById('text-aline-right');
var textPicker = document.getElementById('text-color-picker');

// 폰트 로드
document.fonts.load("16px NanumGothic");
document.fonts.load("16px NanumMyeongjo");
document.fonts.load("16px NanumPen");

// 텍스트 박스 추가
function addTextBox() {
	var tempText = "텍스트 박스";
	
	if(textInput.value != ""){
		tempText = textInput.value
	}
	
	var textbox = new fabric.Textbox(tempText, {
        left: 100,
        top: 100,
        width: 300,
        fontFamily: 'NanumGothic',
        fontSize: 32,
        fill: '#000000'
    });
	
	textFontSelect.value = 'NanumGothic';

    canvas.add(textbox);
    canvas.setActiveObject(textbox);
    canvas.requestRenderAll();
}

document.getElementById('add-text-btn').addEventListener('click', addTextBox);

textInput.addEventListener('input', () => {
    if (!activeText) return;
    activeText.text = textInput.value;
    canvas.requestRenderAll();
});

function getFontLabel(font) {
    switch (font) {
        case 'NanumGothic': return '나눔 고딕';
        case 'NanumMyeongjo': return '나눔 명조';
        case 'NanumPen': return '나눔 펜';
        default: return font;
    }
}

textFontSelect.addEventListener('change', () => {
    if (!activeText || activeText.type !== 'textbox') return;

    var font = textFontSelect.value;

    activeText.set('fontFamily', font);
    canvas.requestRenderAll();
});

// 에디터 텍스트 굵기 수정 시 캔버스 텍스트 수정
textWeightSlider.addEventListener('input', () => {
    if (!activeText) return;

	var weight = Number(textWeightSlider.value);

	activeText.set('fontWeight', weight);
	textWeightValue.textContent = weight;
	canvas.requestRenderAll();
});

// 에디터 텍스트 크기 수정 시 캔버스 텍스트 수정
textSizeSlider.addEventListener('input', () => {
	console.log("activeText : " + activeText)
	
    if (!activeText) return;	

    var targetDiagonal = Number(textSizeSlider.value);
    var currentDiagonal = getDiagonalLength(activeText);

    var scaleRatio = targetDiagonal / currentDiagonal;

    activeText.scaleX *= scaleRatio;
    activeText.scaleY *= scaleRatio;

    textSizeValue.textContent = targetDiagonal;
    canvas.requestRenderAll();
});

// 에디터 텍스트 정렬
textAlineLeft.addEventListener('click', () => {
    setTextAlign('left');
});
textAlineCenter.addEventListener('click', () => {
    setTextAlign('center');
});
textAlineRight.addEventListener('click', () => {
    setTextAlign('right');
});

function setTextAlign(align) {
    if (!activeText) return;
    activeText.set('textAlign', align);
    canvas.requestRenderAll();
}

textPicker.addEventListener('input', () => {
    if (!activeText) return;

    activeText.set('fill', textPicker.value);

    canvas.requestRenderAll();
});

// ---------------------------  에디터 도형 버튼 --------------------------- //
// 도형 로드
function getDiagramSvgs(){
	fetch(ctx + '/getDiagramSvgs')
	    .then(res => res.json())
	    .then(svgs => {
	        svgs.forEach((path, idx) => {
	            var btn = document.createElement('button');
	            btn.className = 'svg-btn';
	            btn.title = 'SVG ' + (idx + 1);
	
	            var img = document.createElement('img');
	            img.src = path;
	            btn.appendChild(img);
	
				var content = document.querySelector('.shape-container');
	            content.appendChild(btn);
	
	            btn.addEventListener('click', () => {
	                fabric.loadSVGFromURL(path, (objects, options) => {
	                    var obj = fabric.util.groupSVGElements(objects, options);
	
	                    obj.set({
	                        left: canvas.width / 2 - (obj.width * obj.scaleX) / 2,
	                        top: canvas.height / 2 - (obj.height * obj.scaleY) / 2,
	                        selectable: true
	                    });
	
	                    canvas.add(obj);
	                    canvas.setActiveObject(obj);
	                    canvas.renderAll();
	                });
	            });
	        });
	    });	
}

// 도형 설정
var shapeSizeSlider = document.getElementById('shape-size-slider');
var shapeSizeValue = document.getElementById('shape-size-value');
var shapePicker = document.getElementById('shape-color-picker');

// 에디터 도형 크기 수정 시 캔버스 도형 수정
shapeSizeSlider.addEventListener('input', () => {
    if (!activeShape) return;

    var targetDiagonal = Number(shapeSizeSlider.value);
    var currentDiagonal = getDiagonalLength(activeShape);

    var scaleRatio = targetDiagonal / currentDiagonal;

    activeShape.scaleX *= scaleRatio;
    activeShape.scaleY *= scaleRatio;

    shapeSizeValue.textContent = targetDiagonal;
    canvas.requestRenderAll();
});

shapePicker.addEventListener('input', () => {
    if (!activeShape) return;

    activeShape.set('fill', shapePicker.value);

    canvas.requestRenderAll();
});

// 공통 부분
// 캔버스 도형 수정 시 에디터 도형 크기 수정
function updateSizeEditor(obj) {
	var diagonal = getDiagonalLength(obj);	
	
	if (obj.type === 'textbox') {
        activeText = obj;
		
		textInput.value = obj.text;
		
		var font = obj.fontFamily || 'NanumGothic';
		
		textSizeSlider.value = diagonal;
	    textSizeValue.textContent = diagonal;
		
		var weight = obj.fontWeight || 400;	
		if(weight == 'normal'){
			weight = 400;
		}	
	    textWeightSlider.value = weight;
	    textWeightValue.textContent = weight;
    } 
    else {
		// 텍스트 박스가 아닌경우
        activeShape = obj;		
		shapeSizeSlider.value = diagonal;
	    shapeSizeValue.textContent = diagonal;
		
    }	    
}

// 대각선 계산
function getDiagonalLength(obj) {
    var w = obj.getScaledWidth();
    var h = obj.getScaledHeight();
    return Math.round(Math.sqrt(w * w + h * h));
}

// 에디터 색상 수정
function updateColorEditor(obj) {
    var fill = obj.fill || '#000000';
    var hexColor = rgbToHex(fill);
	
	if (obj.type === 'textbox') {
        textPicker.value = hexColor;
    } 
    else {
		// 텍스트 박스가 아닌경우
        shapePicker.value = hexColor;
    }	    
}

function rgbToHex(color) {
    if (!color) return '#000000';
    if (color.startsWith('#')) return color;

    var rgb = color.match(/\d+/g);
    return '#' + rgb.map(x => {
        var hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// delete 눌렀을 때 오브젝트 삭제
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Delete') return;

    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    var objs = canvas.getActiveObjects();
    if (!objs.length) return;

    objs.forEach(obj => {
        if (!obj.isEditing) canvas.remove(obj);
    });

    canvas.discardActiveObject();
    canvas.requestRenderAll();
});

// --------------------------- 초기 실행 --------------------------- //
// 초기 버튼 비활성화
closeTab();
hideAllTab();
getDiagramSvgs();
// 초기 버튼 활성화
if(!activeTab){
	var firstBtn = document.querySelector('#editor-tab-button .tab-btn')		
	
	if (firstBtn) {
		openTab(firstBtn.dataset.tab);
	}
}

