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

//로그인 이메일 에러
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

//로그인 비밀번호 에러
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

//활성화된 로그인 버튼 클릭 시 이동
loginBtn.addEventListener("click", (e) => {
  if (!loginBtn.disabled) {
    e.preventDefault(); 
    location.href = '/items';
  }
});


const eyeImg=document.querySelector('.eye-image');

//비밀번호 눈 감고 뜨기
eyeImg.addEventListener("click",()=>{
  const imgSrc = eyeImg.getAttribute('src');
  const passwordType = userPassword.getAttribute('type');

  if (imgSrc === "./images/login/password_close_eye_btn.svg") {
    eyeImg.setAttribute('src', "./images/login/password_open_eye_btn.svg");
    userPassword.setAttribute('type', "text");
  } else {
    eyeImg.setAttribute('src', "./images/login/password_close_eye_btn.svg");
    userPassword.setAttribute('type', "password");
  }
})


