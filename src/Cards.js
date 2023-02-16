import CardItem from "./CardItem";
import CardGroup from "react-bootstrap/CardGroup";
import "./App.css";

const Cards = ({ posts }) => {
  return (
    <CardGroup className="card-group">
      {posts.map((article,index) => (<CardItem article={article} key={index}/>))}
      </CardGroup>
  );
};
export default Cards;
      {/* //   <Card className="card-customized" style={{ width: "18rem" }}>
    //     <Card.Img */}
      {/* //       className="card-img"
    //       variant="top"
    //       src="https://www.freepnglogos.com/uploads/fried-chicken-png/fried-chicken-png-picture-web-icons-png-38.png"
        //  />
    //     <Card.Body>
    //       <Card.Title>Tacos AL Pastor</Card.Title>
    //       <Card.Text>
    //         A Delicious Mexican style Pork recipe
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <button className="card-btn">Get Recipe</button>
    //     </Card.Footer>
    //   </Card> */}
      {/* //   <Card className="card-customized" style={{ width: "18rem" }}>
    //     <Card.Img */}
      {/* //       className="card-img"
    //       variant="top"
    //       src="https://www.freepnglogos.com/uploads/fried-chicken-png/fried-chicken-png-picture-web-icons-png-38.png"
    //     />
    //     <Card.Body>
    //       <Card.Title>Paneer Butter Masala</Card.Title>
    //       <Card.Text>
    //         A creamy tomato curry with Indian cheese and aromatic spices
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <button className="card-btn">Get Recipe</button>
    //     </Card.Footer>
    //   </Card> */}
      {/* //   <Card className="card-customized" style={{ width: "18rem" }}>
    //     <Card.Img */}
      {/* //       className="card-img"
    //       variant="top"
    //       src="https://www.freepnglogos.com/uploads/fried-chicken-png/fried-chicken-png-picture-web-icons-png-38.png"
    //     />
    //     <Card.Body>
    //       <Card.Title>Kentucky Fried Chicken</Card.Title>
    //       <Card.Text>
    //         This most popular chicken recipe will leave you wanting more
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <button className="card-btn">Get Recipe</button>
    //     </Card.Footer>
    //   </Card>
    </CardGroup> */}
    

      
