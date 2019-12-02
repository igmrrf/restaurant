import React, { Component } from "react";
import About from "../components/About";
import Operations from "../components/Operations";
import Booking from "../components/Booking";

export class HomePage extends Component {
	render() {
		return (
			<div>
				<About />
				<Operations />
				<Booking />
			</div>
		);
	}
}

export default HomePage;
