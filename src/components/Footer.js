import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<Container fluid className="text-center pt-3">
					<Row>
						<Col>
							<h3>Address</h3>
							<address>No. 5 Baltimany New York</address>
						</Col>

						<Col md={6}>
							<h2 className="text-left">Hi</h2>
						</Col>
						<Col>
							<h3>Connect with us</h3>
							<span>
								<i className="fab fa-facebook"></i>
								<i className="fab fa-instagram"></i>
								<i className="fab fa-twitter"></i>
								<i className="fab fa-500px text-white"></i>
							</span>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;
