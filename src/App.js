import React from "react";
import "./App.css";
import { client } from "./Client";
import Posts from "./Components/Posts/Posts";
import Carousel from "./Components/Carousel/Carousel";
import Loader from "./Components/Loader/Loader";
import Cards from "./Cards";
import { useState, useEffect } from "react";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setArticles(response.items.filter((item) => item.fields.ingredients));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App-body">
      <Carousel />
      <Cards />

      <div className="container">
        <header>
          <div className="wrapper"></div>
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={articles} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
