const loginForm = document.querySelector("#login-form");
const loginError = document.querySelector("#login-error");
const registerButton = document.querySelector("#register-button");

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginError.classList.add("hidden");
  const email = loginForm.email.value.trim();
  const password = loginForm.password.value;
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    loginError.textContent = error.message;
    loginError.classList.remove("hidden");
    return;
  }
  window.location.href = "index.html";
});

registerButton?.addEventListener("click", async () => {
  const email = window.prompt("Enter your email address:");
  if (!email) return;
  const password = window.prompt("Create a password (minimum 6 characters):");
  if (!password) return;
  const { error } = await supabaseClient.auth.signUp({ email, password });
  if (error) {
    alert(error.message);
    return;
  }
  alert("Registration successful. Check your email if confirmation is enabled, then log in.");
});
