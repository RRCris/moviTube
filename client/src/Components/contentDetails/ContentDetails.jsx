import "./ContentDetails.css";
import back from "../../Images/back.svg";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import video from "../../Videos/pexels-life-on-super-9154023.mp4";

export default function ContentDetails(props) {
  //block if not logged in
  const history = useHistory();
  const profile = useSelector((state) => state.profile);
  if (Object.keys(profile).length === 0) {
    history.push("/login");
  }
  //to up scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //logic for button to go back to previous page
  const goBack = () => {
    history.goBack();
  };
  //get data from redux
  const { id } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const movie = movies
    ? movies.find((item) => item.id === Number(id))
    : undefined;

  return movies.length ? (
    <div className="ContentDetails">
      <div className="container-back" onClick={goBack}>
        <img src={back} alt="btn_back" />
      </div>
      <div className="header">
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>
        <img src={movie.image} alt="" />
        <p>{movie.description}</p>
      </div>
      <div className="reproductor">
        <video src={video} controls></video>
      </div>
    </div>
  ) : (
    <div>Holi</div>
  );
}
