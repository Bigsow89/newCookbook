import Carousel from "./Components/Carousel/Carousel";
import Cards from "./Cards";

const Home = ({ articles }) => {
  return (
    <div>
      <Carousel />
      <Cards posts={articles}/>
    </div>
  );
};

export default Home;
