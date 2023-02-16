import React from "react";
import "./App.css";
import { client } from "./Client";
import { useState, useEffect } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Recipes from "./Recipes";
import Footer from "./Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "cookBookGroup5", limit: 3 })
      .then((response) => {
        console.log(response);
        setArticles(response.items.filter((item) => item.fields.ingredients));
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="App-body">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home articles={articles} />} />
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route exact path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
