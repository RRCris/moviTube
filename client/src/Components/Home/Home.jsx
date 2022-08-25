import "./Home.css";
import CardCategory from "./CardCategory";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_categories } from "../../Redux/actionsAsync";

export default function Home() {
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.categories);

  if (categories.length === 0) {
    get_categories(dispatch);
  }

  return (
    <div id="Home">
      <h1>Bienvenido a MoviTube🚀</h1>

      <p className="sub">
        selecciona cualquier pelicula que te gustaria ver y veéla si no estas
        registrado ¿que esperas?
      </p>

      <div className="container-category">
        {categories.map((category) => (
          <CardCategory key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
}
