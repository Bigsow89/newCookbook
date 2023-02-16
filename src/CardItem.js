import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CardItem = ({ article }) => {
  const { nameOfRecipe, featuredImage, instructions } = article.fields;
  const linkStyle = {
    borderRadius: "8px",
    textDecoration: "none",
    padding: "10px",
    backgroundColor: "#dd5353",
    fontSize: "1rem",
    color: "black",
    fontWeight: "500",
    border: "1px solid black",
    marginBottom: "0.8rem",
    cursor: "pointer",
    boxShadow:
      " 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };
  return (
    <Card className="card-customized" style={{ width: "18rem" }}>
      <Card.Img
        className="card-img"
        variant="top"
        src={featuredImage.fields.file.url}
      />
      <Card.Body>
        <Card.Title>{nameOfRecipe}</Card.Title>
        <Card.Text>{instructions.slice(0, 78)}....</Card.Text>
      </Card.Body>
      <Card.Footer id="footer-link">
        <Link to="/recipes" style={linkStyle}>
          Get Recipe
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardItem;
