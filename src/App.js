import React from "react";
import "./App.css";
import { client } from "./Client";
import { useState, useEffect } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Recipes from "./Recipes";

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
    <>
    
      <div className="App-body">
        <nav>
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
        <Route exact path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes articles={articles} />}>
          
        </Route>
        <Route exact path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    
    
    </>
  );
};

export default App;
