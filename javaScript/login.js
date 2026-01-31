const userEmail = document.getElementById("useremail");
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
}

userEmail.addEventListener("focusout", () => {
  const emailValue = userEmail.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    showError("이메일을 입력해주세요.");
  } else if (!emailPattern.test(emailValue)) {
    showError("잘못된 이메일입니다.");
  } else {
    hideError();
  }
});
