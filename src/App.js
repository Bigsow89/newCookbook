//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
const contentful = require("contentful")
//const dotenv = require("dotenv/config")
function App() {
  const [recipe, setRecipes] = useState([]);
  const [images, setImages] = useState([]);
  const API_BASE_URL = "https://cdn.contenful.com"
  const SPACE_ID = "9iixij3s0gyg"
  //const ENVIRONMENT_ID ="master";
  const ACCESS_TOKEN = "8c-qf_w7Nm2sXzI2oQiNyqFd1MNko8jmbqowCCG6Onc"

  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
      //environment: ENVIRONMENT_ID
    });
    client
      .getAssets()
      .then(function (assets) {
        var res = []
        assets.items.map(function (asset) {
          var imageURL = 'https:' + asset.fields.file.url;
          // console.log("The image url "+imageURL);
          res.push(imageURL);
        });
        setImages(res)
      })
      .catch(function (e) {
        console.log(e);
      });
    client
      .getEntries(/*{content_type:"Cook book-group 5" }*/)
      .then((result) => {setRecipes(result.items);  console.log(result.items);})
      

      .catch((err) => console.log(err));
  }, [])


  return (
    <div className="App">
       <div className="title">CookBook</div>
        {recipe.map(item => (<div key={item.sys.id}>
          
          <div><h2>{item.fields.nameOfRecipe}</h2></div>
          <img src ={item.fields.featuredImage.fields.file.url} width={250} height={250} alt='food'/>
          <div className="preparation">{item.fields.timeOfPreparation}</div>
          <div className="ingredients">{item.fields.ingredients}</div>
          <div className="instructions">{item.fields.instructions}</div>
        </div>))  
      }
      {/* {
        images.map(item =>(<div key={item.sys.id}>
          <img src ={item.fields.featuredImage.fields.file.url}/>
          </div>))
      } */}

    </div>
  );
}

export default App;
