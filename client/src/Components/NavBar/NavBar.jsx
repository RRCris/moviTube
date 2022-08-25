import "./NavBar.css";
import home from "../../Images/home.svg";
import categories from "../../Images/puzzle.svg";
import search from "../../Images/lens.svg";
import user from "../../Images/user.svg";
import exit from "../../Images/back.svg";

import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { set_profile } from "../../Redux/actions";
export default function NavBar() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const history = useHistory();

  function logIn() {
    history.push("/login");
  }
  function logOut() {
    dispatch(set_profile({}));
  }

  let userMenssage = Object.keys(profile).length !== 0 ? "LogOut" : "LogIn";
  let userImage = Object.keys(profile).length !== 0 ? exit : user;
  let userFunction = Object.keys(profile).length !== 0 ? logOut : logIn;
  return (
    <div className="navBar">
      <div className="btn-nav">
        <Link to="/">
          <img src={home} alt="" />
          <h3>Home</h3>
        </Link>
      </div>
      <div className="btn-nav">
        <img src={categories} alt="" />
        <h3>Released</h3>
      </div>
      <div className="btn-nav">
        <img src={search} alt="" />
        <h3>Search</h3>
      </div>
      <div className="btn-nav" onClick={userFunction}>
        <img src={userImage} alt="" />
        <h3>{userMenssage}</h3>
      </div>
    </div>
  );
}
