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
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>Tuesday</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>Wednesday</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>Thursday</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>Friday</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		);
	}
}

export default Operations;
