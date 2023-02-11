import { useEffect } from "react"
import Cards from './Cards';
import './App.css';
import Footer from './Footer';
import Carousel from "./Components/Carousel/Carousel";
import Loader from "./Components/Carousel/Loader/Loader";
const contentful = require("contentful")

function App() {
  useEffect(() => {
    const client = contentful.createClient({
      space : "9iixij3s0gyg",
      accessToken : "8c-qf_w7Nm2sXzI2oQiNyqFd1MNko8jmbqowCCG6Onc"
    })
    client
      .getEntries()
      .then((entry) => console.log(entry))
      .catch((err) => console.log(err))
  },[])
  return (
    <div className="App">

     

      <Carousel />
      <Cards />
      <Footer /> 

    </div>
  );
}

export default App;
