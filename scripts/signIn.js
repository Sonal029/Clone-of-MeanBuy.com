let form = document.getElementById("form");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let UserData = JSON.parse(localStorage.getItem("User")) || [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (loger()) {
    alert("Login Successull");
  } else {
    alert("Wrong Password");
  }
});

function loger() {
  let flag = false;
  UserData.forEach((element) => {
    if (element.email == email.value && element.password == pass.value) {
      flag = true;
    }
  });
  return flag;
}
