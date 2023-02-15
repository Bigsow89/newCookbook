import CardItem from "./CardItem";
import CardGroup from "react-bootstrap/CardGroup";
import "./App.css";

const Cards = ({ posts }) => {
  return (
    <CardGroup className="card-group">
      {posts.map((article, index) =>(<CardItem  article={article} key={index} />))
     }
    
  </CardGroup>
  );
};

export default Cards;
