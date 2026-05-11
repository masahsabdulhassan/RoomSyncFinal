function register() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Account created!");
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect credentials");
  }
}
