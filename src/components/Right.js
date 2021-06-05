import React from "react";
import { Dropdown } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../style.css";

const Right = () => {
	return (
		<div>
			<ArrowBackIcon className={"backArrow"} />
			<p className="sub-header">Assign to factory</p>
			<label>Factory*</label>
			<Dropdown className="dropdown">
				<Dropdown.Toggle variant="Secondary" id="dropdown-basic">
					Select Factory
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<label>Assign for design</label>
			<Dropdown className="dropdown">
				<Dropdown.Toggle variant="Secondary" id="dropdown-basic">
					Search by Name or Design ID
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<label>Assign quantity</label>
		</div>
	);
};

export default Right;
