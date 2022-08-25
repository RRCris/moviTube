import "./Login.css";
import alert from "../../Images/alert-control.svg";
import error from "../../Images/error-control.svg";
import check from "../../Images/check-control.svg";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkEmail, checkPassword } from "./utils";
import { confirm_login } from "../../Redux/actionsAsync";

export default function Login(props) {
  //declare Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector((state) => state.profile);
  if (Object.keys(profile).length !== 0) {
    console.log(profile);
    history.push("/");
  }

  //function buttons
  function goToBack() {
    history.goBack();
  }
  function goToLogin() {
    let email = document.getElementById("control-email").value;
    let password = document.getElementById("control-password").value;

    confirm_login(dispatch, email, password, history).then((res) => {
      window.alert(res);
    });
  }

  return (
    <div className="Login">
      <div className="container-dialog">
        <h1>Login</h1>
        <div className="group-input">
          <div className="input_control">
            <input
              type="text"
              name="control"
              placeholder="Ingresa el Correo"
              onChange={checkEmail}
              id="control-email"
            />
            <p id="messageEmail">Email are Required</p>
            <img id="imgEmail" src={alert} />
          </div>
        </div>
        <div className="group-input">
          <div className="input_control" id="input-password">
            <input
              type="text"
              name="control"
              id="control-password"
              placeholder="Ingresa La Contraseña"
              onChange={checkPassword}
            />
            <p id="messagePassword">Password are Required</p>
            <img id="imgPassword" src={alert} />
          </div>
        </div>
        <div className="group-input">
          <button onClick={goToLogin}>log In</button>
          <button className="optional" onClick={goToBack}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
