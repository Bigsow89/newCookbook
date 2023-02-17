import React from "react";
import "./App.css";
import { client } from "./Client";
import { useState, useEffect } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Recipes from "./Recipes";

import Logo from "./Components/Navbar/Culturekitchen-logo.png";


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
        <header>
          <nav className="container-nav">
            <img src={Logo} className="culturekitchenlogo-header"></img>
            <h2> Culture Kitchen </h2>
            <ul className="nav-link">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home articles={articles} />} />
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route exact path="/about-us" element={<AboutUs />} />
          </Routes>
        </header>
      </div>

    </>
  );
};

export default App;
