import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import Right from "./Right";
import Left from "./Left";
import "../style.css";

const Dialog = (props) => {
	return (
		<Modal
			className="main-dialog"
			{...props}
			size="xl"
			aria-labelledby="contained-modal-title-vcenter"
		>
			<Modal.Header className="main-header" closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Material details
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Container>
					<Row>
						<Col xs={6} md={4}>
							<Left />
						</Col>
						<Col xs={12} md={8}>
							<Right />
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer className="main-footer">
				<Button variant="light">Back</Button>
				<Button variant="secondary" onClick={props.onHide}>
					Next
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Dialog;
