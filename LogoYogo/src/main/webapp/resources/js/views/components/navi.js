// --------------------------- js 시작 --------------------------- //
(() => {
$(document).on("click", ".nav-link", function (e) {
    e.preventDefault();

    var url = $(this).data("url");

    $("#content").load(url, function () {
        window.scrollTo(0, 0);
    });
});

document.getElementById('navi-title').addEventListener('click', e => {
	e.preventDefault();	
	sessionStorage.removeItem('selectData');
	$("#content").load("/mainPage.do", function () {
        window.scrollTo(0, 0);
    });
})

var overlay = document.getElementById('navi-overlay');
var closeBtn = document.getElementById('navi-modal-close');

// 네비 모달 호출
function openNaviModal() {
    overlay.classList.remove('hidden');
}

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
	clearModal();
});

overlay.addEventListener('click', e => {
    if (e.target == overlay) {
		overlay.classList.add('hidden');
		clearModal()
	}
});

// 로그인
document.getElementById("signinForm").addEventListener("submit", function (e) {
    e.preventDefault();
	var formData = new FormData(e.target);

    fetch("/loginProcess", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
	.then(res => res.text())
	.then(result => {
	    if (result === "success") {
			fetch("/navi")
	        .then(res => res.text())
	        .then(html => {
	            document.getElementById("navi-overlay").classList.add("hidden");
	            document.getElementById("navi").outerHTML = html;
	        });
	    } else {
			document.getElementById("signin-error").style.visibility = "visible";			
			//document.getElementById("signin-error").classList.remove("hidden");
			document.getElementById("signin-error").style.display = "block";
	    }
	})
	.catch(err => console.error(err));
});

// 로그아웃
function logOut(){
	fetch("/logout", {
        method: "POST"
    })
    .then(() => {
        sessionStorage.clear();
		fetch("/navi")
        .then(res => res.text())
        .then(html => {
            document.getElementById("navi").outerHTML = html;
        });
    });	
}

// 회원가입
var idError = document.getElementById("id-error");
var pwError = document.getElementById("pw-error");
var pwConfirmError = document.getElementById("pw-confirm-error");

var idRegex = /^[a-zA-Z0-9]{4,12}$/;
var pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/;

// id 확인
document.getElementById("signup-form-name").addEventListener("blur", () => {
    var value = document.getElementById("signup-form-name").value.trim();

    if (!idRegex.test(value)) {
        showError(idError, "아이디는 영문/숫자 4~12자입니다.");
        return;
    }

    fetch("/checkDuplicatedId", {
        method: "POST",
        body: new URLSearchParams({ username: value })
    })
    .then(res => res.text())
    .then(result => {
        if (result === "Duplicate") {
            showError(idError, "이미 사용 중인 아이디입니다.");
        } else {
            clearError(idError);
        }
    });
});

// pw 확인
document.getElementById("signup-form-password").addEventListener("input", () => {
    if (!pwRegex.test(document.getElementById("signup-form-password").value)) {
        showError(pwError, "영문+숫자+특수문자 포함 8~20자");
    } else {
        clearError(pwError);
    }
});

// pw 재확인
document.getElementById("signup-form-passwordConfirm").addEventListener("input", () => {
    if (document.getElementById("signup-form-password").value !== document.getElementById("signup-form-passwordConfirm").value) {
        showError(pwConfirmError, "비밀번호가 일치하지 않습니다.");
    } else {
        clearError(pwConfirmError);
    }
});

function showError(el, msg) {
    el.innerText = msg;
    el.style.visibility = "visible";
}

function clearError(el) {
    el.innerText = "";
    el.style.visibility = "hidden";
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
	e.preventDefault();	
	
    if (idError.innerText || pwError.innerText || pwConfirmError.innerText) {
        e.preventDefault();
        alert("입력값을 다시 확인해주세요.");
    } else{		
		document.getElementById("signup-error").style.visibility = "visible";
		//document.getElementById("signup-error").classList.remove("hidden");
		document.getElementById("signup-error").style.display = "block";
	}
});

// 모달창 이동
function clearModal() {
	// form 초기화
    document.getElementById("signinForm")?.reset();
    document.getElementById("signupForm")?.reset();

	// 에러 문구 숨김
    //document.getElementById("signin-error").classList.add("hidden");
    //document.getElementById("signup-error").classList.add("hidden");
	document.getElementById("signin-error").style.visibility = "hidden";
	document.getElementById("signup-error").style.visibility = "hidden";
	
	// 에러 숨김
	clearError(idError);
	clearError(pwError);
	clearError(pwConfirmError);
	
	// 내용 숨김
	document.getElementById("modal-sign-in").classList.add("hidden");
	document.getElementById("modal-sign-up").classList.add("hidden");
	
}

function changeModal(text){
	if(text == "signin"){
		document.getElementById("modal-sign-in").classList.remove('hidden')
		document.getElementById("modal-sign-up").classList.add('hidden')
	} else if(text == "signup"){
		document.getElementById("modal-sign-in").classList.add('hidden')
		document.getElementById("modal-sign-up").classList.remove('hidden')
	}	
}

document.getElementById("navi-modal-change-signup").addEventListener("click", () => {
    clearModal();    
	changeModal("signup");
});

document.getElementById("navi-modal-change-signin").addEventListener("click", () => {
    clearModal();    
	changeModal("signin");	
});

// 위임
document.addEventListener("click", function(e) {
	if(e.target.id == "sign-in-btn"){
		openNaviModal();
		changeModal("signin");
	} 
	
	if(e.target.id == "sign-up-btn"){
		openNaviModal();		
		changeModal("signup");	
	}
	
	if(e.target.id == "sign-out-btn"){
		logOut();
	}	
});

// --------------------------- js 밑단 --------------------------- //
})();