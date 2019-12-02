import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import ContactPage from "./containers/ContactPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/contact" component={ContactPage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
