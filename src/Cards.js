import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./App.css";

const Cards = () => {
  return (
    <CardGroup className="card-group">
      <Card className="card-customized" style={{ width: "18rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src="https://www.freepnglogos.com/uploads/fried-chicken-png/fried-chicken-png-picture-web-icons-png-38.png"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="card-btn">Get Recipe</button>
        </Card.Footer>
      </Card>
      <Card className="card-customized" style={{ width: "18rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src="https://www.freepnglogos.com/uploads/fried-chicken-png/fried-chicken-png-picture-web-icons-png-38.png"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="card-btn">Get Recipe</button>
        </Card.Footer>
      </Card>
      <Card className="card-customized" style={{ width: "18rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src="https://www.freepnglogos.com/uploads/fried-chicken-png/fried-chicken-png-picture-web-icons-png-38.png"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="card-btn">Get Recipe</button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Cards;
