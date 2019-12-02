import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export class About extends Component {
	render() {
		return (
			<Container className="about">
				<div className="about-cover">
					<h1 className="about-head">KAITINDRESTAURANT</h1>
					<hr className="about-rule" />
					<h2>BEST INDIAN COUSINES IN TOWN</h2>
				</div>
				<div className="about-text">
					<h3>KAITINDRESTAURANT IS NOW SERVING</h3>
					<p>
						Lorem is a fucking stupid shit that fucking requires stupid
						extension that i dont have strength to donwload and this typing is
						getting on my nerves too
					</p>
				</div>
			</Container>
		);
	}
}

export default About;
