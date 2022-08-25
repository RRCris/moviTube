import "./CardMovie.css";
import { Link } from "react-router-dom";

export default function CardMovie(props) {
  return (
    <div className="CardMovie">
      <Link to={`/movie/${props.data.id}`}>
        <div className="CardMovie-image">
          <img src={props.data.image} alt="" />
          <div></div>
          {/*Shadow*/}
        </div>
        <h2>{props.data.title}</h2>
      </Link>
    </div>
  );
}
