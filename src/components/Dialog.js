import React from "react";
import Left from "./Left"
import Right from "./Right";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

class Dialog extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}
	handleModal() {
		this.setState({ show: !this.state.show });
	}
	render() {
		return (
			<div>
				<Button
					onClick={() => {
						this.handleModal();
					}}
				>
					Opan Modal
				</Button>
				<Modal
					show={this.state.show}
					onHide={() => this.handleModal()}
					size="xl"
					aria-labelledby="contained-modal-title-vcenter"
				>
					<Modal.Header closeButton className="font-weight-bold">
						Material Details
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Row>
								<Col sm={4}>
									{/* <img src="https://i.pinimg.com/originals/77/bf/ea/77bfea59d1f0217d96bd8cebad62325d.jpg"></img> */}
									<Left />
								</Col>
								<Col sm={8}>
									<Right />
								</Col>
							</Row>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={() => {
								this.handleModal();
							}}
						>
							Back
						</Button>
						<Button variant="primary" disabled>
							Next
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Dialog;
