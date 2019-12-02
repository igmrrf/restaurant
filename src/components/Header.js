import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
const Link = require("react-router-dom").Link;

class Header extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg" className="top-header" sticky>
				<Navbar.Brand>
					<Link to="/">
						<h2>Restaurant</h2>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="header" />
				<Navbar.Collapse id="header">
					<Nav className="m-auto">
						<Form inline>
							<FormControl
								type="text"
								placeholder="search"
								className="mr-sm-2"
								style={{ border: "none", borderBottom: "2px solid blue" }}
							/>
						</Form>

						<Nav.Link> Dinner</Nav.Link>
						<Nav.Link>Dessert</Nav.Link>
						<Nav.Link>Beverage Program</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
