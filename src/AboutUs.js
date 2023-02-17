
import { useEffect, useState } from "react";
import Footer from "./Footer";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// function AboutUS() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col>This Recipe page presents you the most delicious recipe from around the world </Col>
//       </Row>
//     </Container>
//   );
// }

// export default AboutUS;


function AboutUS() {
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <>
          <h2>About Us</h2>
          <p>
            This Recipe website has a collection of tasty recipes from all
            around the world. Enjoy these Recipes and don't forget to give us
            your feedback in our social media. Our Youtube channel is coming
            soon.{" "}
          </p>
          <h2>Latest Updates</h2>
          <p>Checkout our latest updates in our social media</p>
          <Footer />
          {" "}
        </>
      )}
    </div>
  );
}
export default AboutUS;

