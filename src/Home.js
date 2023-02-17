import Carousel from "./Components/Carousel/Carousel";
import Cards from "./Cards";
import Footer from "./Footer";
const Home = ({ articles }) => {
  return (
    <div>
      <Carousel />
      <Cards posts={articles} />
      <Footer />
    </div>
  );
};

export default Home;
