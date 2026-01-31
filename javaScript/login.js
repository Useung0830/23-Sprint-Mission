const userEmail = document.getElementById("useremail");
const emailBox = document.querySelector(".email-box");
const emailErr = document.createElement("span");
// 이메일에 값이 없을 때 빨강색 테두리와 에러 메세지
//이메일 형식에 맞지 않을 때 에러 메세지
userEmail.addEventListener("focusout", (event) => {
  const emailValue = userEmail.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailValue === "") {
    event.target.style.outline = "1px solid #F74747";
    emailErr.textContent = "이메일을 입력해주세요.";
    emailBox.append(emailErr);
  } else if (!emailPattern.test(emailValue)) {
    event.target.style.outline = "1px solid #F74747";
    emailErr.textContent = "잘못된 이메일 형식 입니다.";
    emailBox.append(emailErr);
  } else {
    event.target.style.outline = "none";
    emailErr.textContent = "";
    emailErr.remove();
  }
});
