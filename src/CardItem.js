import Card from "react-bootstrap/Card";

const CardItem = ({ article }) => {
  const {
    nameOfRecipe,
    featuredImage,
    instructions,
    
    
    
  } = article.fields;
  return (
    <Card className="card-customized" style={{ width: "18rem" }}>
      <Card.Img className="card-img" variant="top" src={featuredImage.fields.file.url} />
      <Card.Body>
        <Card.Title>{nameOfRecipe}</Card.Title>
        <Card.Text>{instructions.slice(0, 78)}....</Card.Text>
      </Card.Body>
      <Card.Footer>
        <button className="card-btn">Get Recipe</button>
      </Card.Footer>
    </Card>
  )
}

export default CardItem