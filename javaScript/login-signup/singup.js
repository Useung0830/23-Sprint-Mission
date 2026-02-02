import {
  userEmail,
  emailText,
  userPassword,
  passwordText,
  showError,
  hideError,
} from "./login.js";

const passwordConfirm = document.getElementById("password_confirm");
const passwordConfirmText = document.querySelector(".err-password_confirm");

//회원가입page 비밀번호_확인 에러
passwordConfirm.addEventListener("focusout", () => {
  const passwordValue = userPassword.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();

  if (passwordValue !== passwordConfirmValue) {
    showError(
      passwordConfirm,
      passwordConfirmText,
      "비밀번호가 일치하지 않습니다.",
    );
  } else {
    hideError(passwordConfirm, passwordConfirmText);
    signupButton();
  }
});

userEmail.addEventListener("focusout", () => {
  const emailValue = userEmail.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailValue === "") {
    showError(userEmail, emailText, "이메일을 입력해주세요.");
  } else if (!emailPattern.test(emailValue)) {
    showError(userEmail, emailText, "잘못된 이메일입니다.");
  } else {
    hideError(userEmail, emailText);
  }
  loginButton();
});

// const nickname = document.getElementById("nickname");
// const nicknameText = document.querySelector(".err-nickname");

// //회원가입page 닉네임 에러
// nickname.addEventListener("focusout", () => {
//   const nicknameValue = nickname.value.trim();
//   const nicknamePattern = /^[a-zA-Z가-힣]+$/;

//   if (nicknameValue === "") {
//     showError(nickname, nicknameText, "닉네임을 입력해주세요.");
//   } else if (!nicknamePattern.test(nicknameValue)) {
//     showError(nickname, nicknameText, "닉네임을 다시 입력해주세요.");
//   } else {
//     hideError(nickname, nicknameText);
//   }
// });

// // //회원가입 로그인버튼 활성화
// function signupButton() {
//   if (!nickname || !passwordConfirm) return;
//   const emailDisplay = window.getComputedStyle(emailText).display;
//   const nicknameDisplay = window.getComputedStyle(passwordConfirmText).display;
//   const passwordDisplay = window.getComputedStyle(passwordText).display;
//   const passwordConfirmDisplay =
//     window.getComputedStyle(passwordConfirmText).display;

//   const isEmailValid = emailDisplay === "none" && userEmail.value.trim() !== "";
//   const isNicknameValid =
//     nicknameDisplay === "none" && nickname.value.trim() !== "";
//   const isPasswordValid =
//     passwordDisplay === "none" && userPassword.value.trim() !== "";
//   const ispasswordConfirmValid =
//     passwordConfirmDisplay === "none" && passwordConfirm.value.trim() !== "";

//   if (
//     isEmailValid &&
//     isNicknameValid &&
//     isPasswordValid &&
//     ispasswordConfirmValid
//   ) {
//     loginBtn.classList.add("able-login");
//     loginBtn.disabled = false;
//   } else {
//     loginBtn.classList.remove("able-login");
//     loginBtn.disabled = true;
//   }
// }
