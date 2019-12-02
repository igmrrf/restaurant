import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export class Operations extends Component {
	render() {
		return (
			<Container>
				<h1 className="text-center">Hours Of Operations</h1>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Days</th>
							<th>Opening Hours</th>
							<th>Closing Hours</th>
							<th>Discounts</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Monday</td>
							<td>9:00am</td>
							<td>9:00pm</td>
							<td>Camondo 20%</td>
						</tr>
						<tr>
							<td>Tuesday</td>
							<td>9:00am</td>
							<td>7:00pm</td>
							<td>Fatiliza 10%</td>
						</tr>
						<tr>
							<td>Wednesday</td>
							<td>10:00am</td>
							<td>6:00pm</td>
							<td>Crustaceans 10%</td>
						</tr>
						<tr>
							<td>Thursday</td>
							<td>9:00am</td>
							<td>6:00pm</td>
							<td>Brazkil 15%</td>
						</tr>
						<tr>
							<td>Friday</td>
							<td>9:00</td>
							<td>6:00pm</td>
							<td>10% on All</td>
						</tr>
						<tr>
							<td>Saturday</td>
							<td>9:00</td>
							<td>6:00pm</td>
							<td>10% on Fish</td>
						</tr>
						<tr>
							<td>Sunday</td>
							<td>12:00noon</td>
							<td>9:00pm</td>
							<td>10% on Snacks</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		);
	}
}

export default Operations;
