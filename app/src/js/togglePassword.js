const passwordInput = document.querySelector("#password-input");
const togglePasswordBtn = document.querySelector("#toggle-password");

togglePasswordBtn.addEventListener("click", togglePassword);
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.firstElementChild.src = "../../assets/show.svg";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.firstElementChild.src = "../../assets/hide.svg";
  }
}
