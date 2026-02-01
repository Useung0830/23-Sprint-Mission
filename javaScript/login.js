const userEmail = document.getElementById("useremail");
const emailText = document.querySelector(".error-text");
const userPassword = document.getElementById("password");
const passwordText = document.querySelector(".err-password");
const loginBtn = document.querySelector(".go-login");


// 에러 나타내기 (이메일、 비밀번호)
function showError(inputElement, textElement, message) {
  inputElement.classList.add("err-inputbox");
  textElement.textContent = message;
  textElement.style.display = "block";
}

// 에러 없애기 (이메일、 비밀번호)
function hideError(inputElement, textElement) {
  inputElement.classList.remove("err-inputbox");
  textElement.style.display = "none";
}

//로그인 버튼 활성화
function loginButton() {
  const emailDisplay = window.getComputedStyle(emailText).display;
  const passwordDisplay = window.getComputedStyle(passwordText).display;
  const isEmailValid = emailDisplay === "none" && userEmail.value.trim() !== "";
  const isPasswordValid = passwordDisplay === "none" && userPassword.value.trim() !== "";

  if (isEmailValid && isPasswordValid) {

    loginBtn.classList.add("able-login");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove("able-login");
    loginBtn.disabled = true;
  }
}

//로그인,회원가입 이메일 에러
userEmail.addEventListener("focusout", () => {
  const emailValue = userEmail.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    showError(userEmail, emailText, "이메일을 입력해주세요.");
  } else if (!emailPattern.test(emailValue)) {
    showError(userEmail, emailText, "잘못된 이메일입니다.");
  } else {
    hideError(userEmail, emailText);
    loginButton();
  }
});

//로그인,회원가입 비밀번호 에러
userPassword.addEventListener("focusout", () => {
  const passwordValue = userPassword.value.trim();
  const passwordLength=passwordValue.length;

  if (passwordValue === "") {
    showError(userPassword, passwordText, "비밀번호를 입력해주세요.");
  } else if (passwordLength < 8) {
    showError(userPassword, passwordText, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    hideError(userPassword, passwordText);
    loginButton();
  }
});

const  passwordConfirm=document.getElementById("password_confirm");
const passwordConfirmText=document.querySelector(".err-password_confirm");

//회원가입 비밀번호_확인 에러
try{
  passwordConfirm.addEventListener("focusout", () => {
  const passwordValue = userPassword.value.trim();
  const passwordConfirmValue=passwordConfirm.value.trim();

  if (passwordValue !== passwordConfirmValue) {
    showError(passwordConfirm, passwordConfirmText, "비밀번호가 일치하지 않습니다.");
  }else{
    hideError(passwordConfirm, passwordConfirmText);
  }
});
}catch(err){
  console.log("회원가입과 같은 파일 사용 오류");
}


const nickname=document.getElementById("nickname");
const nicknameText=document.querySelector(".err-nickname");

//닉네임 에러
try{
  nickname.addEventListener("focusout", () => {
  const nicknameValue = nickname.value.trim();
  const nicknamePattern=/^[a-zA-Z가-힣]+$/;

  if(nicknameValue===""){
    showError(nickname, nicknameText, "닉네임을 입력해주세요.");
  }else if (!nicknamePattern.test(nicknameValue)) {
    showError(nickname, nicknameText, "닉네임을 다시 입력해주세요.");
  } else {
    hideError(nickname, nicknameText);
    loginButton();
  }
})
}catch(err){
  console.log("회원가입과 같은 파일 사용 오류");
}

//활성화된 로그인 버튼 클릭 시 이동
loginBtn.addEventListener("click", (e) => {
  if (!loginBtn.disabled) {
    e.preventDefault(); 
    location.href = '/items';
  }
});

// //비밀번호 눈 감고 뜨기
const eyeImgs = document.querySelectorAll('.eye-image');

eyeImgs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isClosed = btn.getAttribute('src').includes('password_close');
    const targetInput = btn.previousElementSibling; 

    if (isClosed) {
      btn.setAttribute('src', "./images/login/password_open_eye_btn.svg");
      targetInput.setAttribute('type', "text");
    } else {
      btn.setAttribute('src', "./images/login/password_close_eye_btn.svg");
      targetInput.setAttribute('type', "password");
    }
  });
});



