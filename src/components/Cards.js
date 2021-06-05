import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import img1 from "../images/one.jpg";
import img2 from "../images/four.jpg";
import img3 from "../images/three.jpg";
import img4 from "../images/two.jpg";

const Cards = () => {
	return (
		<div className="main-card">
			<CardGroup>
				<Card className="card-layout">
					<Card.Img className="image-section" variant="top" src={img1} />
					<Card.Body>
						<Card.Title>ID: </Card.Title>
						<Card.Text className="card-desc">
							100% Cotton Navy/White Colour Oxford Chambery
						</Card.Text>
					</Card.Body>
					<Card.Footer className="card-footer">
						<small className="text-muted">Also available in</small>
					</Card.Footer>
				</Card>
				<Card className="card-layout">
					<Card.Img className="image-section" variant="top" src={img2} />
					<Card.Body>
						<Card.Title>ID: </Card.Title>
						<Card.Text className="card-desc">
							100% Cotton Navy/White Colour Oxford Chambery
						</Card.Text>
					</Card.Body>
					<Card.Footer className="card-footer">
						<small className="text-muted">Also available in</small>
					</Card.Footer>
				</Card>
				<Card className="card-layout">
					<Card.Img className="image-section" variant="top" src={img3} />
					<Card.Body>
						<Card.Title>ID: </Card.Title>
						<Card.Text className="card-desc">
							100% Cotton Navy/White Colour Oxford Chambery
						</Card.Text>
					</Card.Body>
					<Card.Footer className="card-footer">
						<small className="text-muted">Also available in</small>
					</Card.Footer>
				</Card>
				<Card className="card-layout">
					<Card.Img className="image-section" variant="top" src={img4} />
					<Card.Body>
						<Card.Title>ID: </Card.Title>
						<Card.Text className="card-desc">
							100% Cotton Navy/White Colour Oxford Chambery
						</Card.Text>
					</Card.Body>
					<Card.Footer className="card-footer">
						<small className="text-muted">Also available in</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</div>
	);
};

export default Cards;
