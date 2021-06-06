import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { Form, Col } from "react-bootstrap";
import "./style.css";

const Right = () => {
	return (
		<div>
			<ArrowLeft
				color="black"
				size={20}
				className="d-inline-block float-left"
			/>
			<p className="font-weight-bold main-label">Assign To Factory</p>
			<Form>
				<Form.Group controlId="exampleForm.SelectCustom">
					<Form.Label className="text-secondary small">Factory*</Form.Label>
					<Form.Control className="dropdown" as="select" custom>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
					<Form.Label className="text-secondary small">
						Assign for design*
					</Form.Label>
					<Form.Control as="select" custom>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
					<Form.Label className="text-secondary small">Factory*</Form.Label>
					<Form.Control as="select" custom>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
				</Form.Group>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label className="text-secondary small">
							Assign Quantity
						</Form.Label>
						<Form.Control />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label className="text-secondary small">
							Available Inventory
						</Form.Label>
						<p>1,200 metre</p>
					</Form.Group>
				</Form.Row>

				<div className="mb-3">
					<Form.Label className="text-secondary small">
						Attach Challan
					</Form.Label>
					<Form.File id="formcheck-api-custom" custom>
						<Form.File.Input isValid />
						<Form.File.Label data-browse="Upload">Select File</Form.File.Label>
					</Form.File>
				</div>
			</Form>
		</div>
	);
};

export default Right;
