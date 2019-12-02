import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Contact extends Component {
	render() {
		return (
			<Container
				style={{
					minHeight: "80vh"
				}}
			>
				<Row>
					<Col md={6}>
						<Form>
							<Form.Group>
								<Form.Label>Enter Full Name</Form.Label>
								<Form.Control type="text" placeholder="Francis Igbiriki" />
							</Form.Group>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									placeholder="francis.igbiriki.fi@gmail.com"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Subject</Form.Label>
								<Form.Control
									type="text"
									placeholder="Why are you contacting us"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Message</Form.Label>
								<Form.Control as="textarea" type="text" row="5" />
							</Form.Group>
							<Button>Send</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Contact;
