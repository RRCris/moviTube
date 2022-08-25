import { Link } from "react-router-dom";
export default function CardCategory(props) {
  return (
    <div className="card-category">
      <Link to={`/category/${props.data.id}`}>
        <img src={props.data.image} alt="" />
        <span></span>
        <h3>{props.data.name}</h3>
        <p>{props.data.description}</p>
      </Link>
    </div>
  );
}
