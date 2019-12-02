import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class About extends Component {
	render() {
		return (
			<Container className="about">
				<Row>
					<Col>
						<div className="about-cover">
							<h1 className="about-head">KAITINDRESTAURANT</h1>
							<hr className="about-rule" />
							<h2>BEST INDIAN COUSINES IN TOWN</h2>
						</div>
						<div className="about-text">
							<h1 className="text-center about-text-head">
								KAITIND RESTAURANT
							</h1>
							<p>
								A restaurant (French: [ʁɛstoʁɑ̃] (About this soundlisten)), or an
								eatery, is a business that prepares and serves food and drinks
								to customers. Meals are generally served and eaten on the
								premises, but many restaurants also offer take-out and food
								delivery services. Restaurants vary greatly in appearance and
								offerings, including a wide variety of cuisines and service
								models ranging from inexpensive fast food restaurants and
								cafeterias, to mid-priced family restaurants, to high-priced
								luxury establishments
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default About;
