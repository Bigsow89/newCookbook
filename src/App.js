//import logo from './logo.svg';
import './App.css';
import {useState,useEffect } from 'react';
const contentful = require("contentful")
//const dotenv = require("dotenv/config")
function App() {
  const [recipe, setRecipes] = useState([]);
  const API_BASE_URL = "https://cdn.contenful.com"
  const SPACE_ID = "9iixij3s0gyg"
  //const ENVIRONMENT_ID ="master";
  const ACCESS_TOKEN ="8c-qf_w7Nm2sXzI2oQiNyqFd1MNko8jmbqowCCG6Onc"

  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
      //environment: ENVIRONMENT_ID
    });
    client
      .getEntries()
      .then((result) => setRecipes(result.items))
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      { 
         recipe.map (item => (<li > {item.fields.title} {item.fields.instructions}</li>) )
      }

    </div>
  );
}

export default App;
