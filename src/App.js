import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import Contact from "./containers/Contact";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
