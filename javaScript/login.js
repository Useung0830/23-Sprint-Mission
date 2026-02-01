const userEmail = document.getElementById("useremail");
const userPassword = document.getElementById("password");
const emailText = document.querySelector(".error-text");
const passwordText = document.querySelector(".err-password");

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

function loginButton(){
  
}

//로그인 이메일 에러
userEmail.addEventListener("focusout", () => {
  const emailValue = userEmail.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    showError(userEmail, emailText, "이메일을 입력해주세요.");
  } else if (!emailPattern.test(emailValue)) {
    showError(userEmail, emailText, "잘못된 이메일입니다.");
  } else {
    hideError(userEmail, emailText);
  }
});

//로그인 비밀번호 에러
userPassword.addEventListener("focusout", () => {
  const passwordValue = userPassword.value;
  const passwordLength=passwordValue.length;

  if (passwordValue === "") {
    showError(userPassword, passwordText, "비밀번호를 입력해주세요.");
  } else if (passwordLength < 8) {
    showError(userPassword, passwordText, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    hideError(userPassword, passwordText);
  }
});


