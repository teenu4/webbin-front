import ReactDOM from "react-dom";
import { makeMainRoutes } from "./routes";
import './assets/main.css';

const routes = makeMainRoutes();
ReactDOM.render(routes, document.getElementById("root"));
