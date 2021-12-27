import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import Board from "./Pages/Board/Board";
import Home from "./Pages/Home/Home";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/:slug">
						<Board />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
