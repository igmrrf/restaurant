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
						<Col className="center">
							<h3>© 2019 Kaitind Restaurant </h3>
						</Col>

						<Col md={6} className="center">
							<h2>
								Developed by{" "}
								<strong style={{ color: "blue" }}>IgmrrfServices</strong>
							</h2>
						</Col>
						<Col md={3} className="center">
							<span className="span-icon">
								<i className="fab fa-facebook"></i>
								<i className="fab fa-instagram"></i>
								<i className="fab fa-twitter"></i>
								<i className="fab fa-github"></i>
							</span>
							<h3>Connect with us</h3>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;
