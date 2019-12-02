import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export class Booking extends Component {
	render() {
		return (
			<Container>
				<div className="text-center">
					<h1>Reservations</h1>
					<p>E-mail francis.igbiriki.fi@gmail.com or</p>
					<p>Call (081) 370-45484</p>
					<h1>Location:</h1>
					<p>590 Baltimore Pike,</p>
					<p>New Pace 007,</p>
					<p>Double Stale Parking</p>
				</div>
			</Container>
		);
	}
}

export default Booking;
