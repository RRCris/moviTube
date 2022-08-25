import "./ContentCategory.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_movies } from "../../Redux/actionsAsync";
import cd from "../../Images/cd.svg";
import eye from "../../Images/eye.svg";
import ne from "../../Images/new.svg";
import CardMovie from "./CardMovie";

export default function ContentCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  let movies = useSelector((state) => state.movies);
  let category = useSelector((state) => state.categories);
  if (category.length === 0) {
    history.push("/");
  }
  category = category.find((item) => item.id === Number(id));
  if (!category) {
    history.push("/");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    get_movies(dispatch, id);
  }, []);

  return (
    <div className="content-category">
      <div className="detailsCategory">
        <div className="header">
          <img src={category.image} alt="" />
          <span></span>
          <h1>{category.name}</h1>
          <div className="details">
            <div className="details-item">
              <img src={cd} alt="" />
              <h3>{category.moviesNumber + " Peliculas"}</h3>
              <p>listas para ver</p>
            </div>
            <div className="details-item">
              <img src={eye} alt="" />
              <h3>{category.views + " Visitas"}</h3>
              <p>van esta Semana</p>
            </div>
            <div className="details-item">
              <img src={ne} alt="" />
              <h3>{category.lastMovie}</h3>
              <p>es nuestro ultimo estreno</p>
            </div>
          </div>
        </div>
      </div>
      <h1 id="title">Peliculas</h1>
      <div className="content-movies">
        <div className="content-border"></div>
        <div className="content">
          {movies.map((movie) => (
            <CardMovie data={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
