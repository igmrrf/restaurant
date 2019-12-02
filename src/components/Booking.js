import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export class Booking extends Component {
	render() {
		return (
			<Container>
				<div>
					<h1>
						Reservations: Email restaurantindika@gmail.com or Call (713)
						524-2170
					</h1>
					<h1>
						Location: 516 Westheimer Road, Houston Texas 77006 Complimentary
						Valet
					</h1>
					<h1>Parking</h1>
				</div>
			</Container>
		);
	}
}

export default Booking;
