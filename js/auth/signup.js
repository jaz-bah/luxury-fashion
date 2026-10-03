document.querySelectorAll(".pf-form-password").forEach((passwordGroup) => {
  const passwordInput = passwordGroup.querySelector("input[type='password']");
  const passwordToggle = passwordGroup.querySelector(".pf-password-toggle");

  passwordToggle.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
});
