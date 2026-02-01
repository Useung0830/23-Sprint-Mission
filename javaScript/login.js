const userEmail = document.getElementById("useremail");
<<<<<<< HEAD
const userPassword = document.getElementById("password");
const emailText = document.querySelector(".error-text");
const passwordText = document.querySelector(".err-password");

// // 이메일 - 에러박스,텍스트 나타내기
// function emailError(message) {
//   userEmail.classList.add("err-inputbox");
//   emailText.textContent = message;
//   emailText.style.display = "block";
// }
// // 이메일 - 에러박스,텍스트 없애기
// function emailErrorHide() {
//   userEmail.classList.remove("err-inputbox");
//   emailText.style.display = "none";
// }
// // 비밀번호 - 에러박스,텍스트 나타내기
// function passwordError(message) {
//   userPassword.classList.add("err-inputbox");
//   passwordText.textContent = message;
//   passwordText.style.display = "block";
// }
// // 비밀번호 - 에러박스,텍스트 없애기
// function passwordErrorHide() {
//   userPassword.classList.remove("err-inputbox");
//   passwordText.style.display = "none";
// }

// 에러 나타내기 (공통)
function showError(inputElement, textElement, message) {
  inputElement.classList.add("err-inputbox");
  textElement.textContent = message;
  textElement.style.display = "block";
}

// 에러 없애기 (공통)
function hideError(inputElement, textElement) {
  inputElement.classList.remove("err-inputbox");
  textElement.style.display = "none";
=======
const emailText = document.querySelector(".error-text");

// 1. 에러를 표시
function showError(message) {
  userEmail.classList.add("err-inputbox");
  emailText.textContent = message;
  emailText.style.display = "block";
}

function hideError() {
  userEmail.classList.remove("err-inputbox");
  emailText.style.display = "none";
>>>>>>> 4319a61a206d4b2e99008730548e8708645dc6c7
}

userEmail.addEventListener("focusout", () => {
  const emailValue = userEmail.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
<<<<<<< HEAD
    showError(userEmail, emailText, "이메일을 입력해주세요.");
  } else if (!emailPattern.test(emailValue)) {
    showError(userEmail, emailText, "잘못된 이메일입니다.");
  } else {
    hideError(userEmail, emailText);
  }
});


//비밀번호 - 에러박스, 텍스트 나타내기
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
=======
    showError("이메일을 입력해주세요.");
  } else if (!emailPattern.test(emailValue)) {
    showError("잘못된 이메일입니다.");
  } else {
    hideError();
  }
});
>>>>>>> 4319a61a206d4b2e99008730548e8708645dc6c7
