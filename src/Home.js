import Carousel from "./Components/Carousel/Carousel";
import Cards from "./Cards";
import Footer from "./Footer"; 
import { useEffect, useState } from "react";
const Home = ({ articles }) => {
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (<div className="lds-dual-ring"></div>) : (
      <>
      <Carousel />
      <h2 id="home-header">Top Recipes</h2>
      <Cards posts={articles}/>
      <Footer />
      </>)}
      
    </div>
  );
};

export default Home;
