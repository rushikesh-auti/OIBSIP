function register() {

  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration Successful");
}

function login() {

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const message = document.getElementById("message");

  if (username === storedUsername && password === storedPassword) {

    localStorage.setItem("isLoggedIn", "true");

    message.style.color = "green";
    message.innerText = "Login Successful";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {

    message.style.color = "red";
    message.innerText = "Invalid Username or Password";
  }
}