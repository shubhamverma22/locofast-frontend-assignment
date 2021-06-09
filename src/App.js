import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dialog from "./components/Dialog";
import Cards from "./components/Cards";

function App() {
	const [modalShow, setModalShow] = useState(false);
	return (
		<div className="App">
			<Dialog show={modalShow} onHide={() => setModalShow(false)} />
			<Cards />
		</div>
	);
}

export default App;
