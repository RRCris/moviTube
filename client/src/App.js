import "./Global/global.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ContentCategory from "./Components/contentCategory/ContentCategory";
import ContentDetails from "./Components/contentDetails/ContentDetails";
import Login from "./Components/Login/Login";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:id" component={ContentCategory} />
        <Route path="/movie/:id" component={ContentDetails} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
