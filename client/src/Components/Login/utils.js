import alert from "../../Images/alert-control.svg";
import error from "../../Images/error-control.svg";
import check from "../../Images/check-control.svg";

let email_RegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//controls inputs

export function checkEmail(e) {
  if (e.target.value.length === 0) {
    document.getElementById("messageEmail").innerText = "Email is required";
    document.getElementById("imgEmail").src = alert;
    return 0;
  }
  if (!email_RegExp.test(e.target.value)) {
    document.getElementById("messageEmail").innerText = "Email is not valid";
    document.getElementById("imgEmail").src = error;
    return 0;
  }
  document.getElementById("messageEmail").innerText = "Email valid";
  document.getElementById("imgEmail").src = check;
}
export function checkPassword(e) {
  if (e.target.value.length === 0) {
    document.getElementById("messagePassword").innerText =
      "Password is required";
    document.getElementById("imgPassword").src = alert;
    return 0;
  }
  if (e.target.value.length < 6) {
    document.getElementById("messagePassword").innerText =
      "Password is too short";
    document.getElementById("imgPassword").src = error;
    return 0;
  }
  if (e.target.value.length > 15) {
    document.getElementById("messagePassword").innerText =
      "Password is too large";
    document.getElementById("imgPassword").src = error;
    return 0;
  }
  document.getElementById("messagePassword").innerText = "Password valid";
  document.getElementById("imgPassword").src = check;
}
