import React from "react";
import "./App.css";
import { client } from "./Client";
import Posts from "./Components/Posts/Posts";
import Carousel from "./Components/Carousel/Carousel";
import Loader from "./Components/Loader/Loader";

class App extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items.filter((item) => item.fields.ingredients),
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span className="logo"> </span>
            </div>
          </header>
          <main>
            <div className="App">
              <Carousel />
            </div>
            <div className="wrapper">
              <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}
// function App() {
//     const [recipe, setRecipes] = useState([]);

//     useEffect(() => {
//       const client = contentful.createClient({
//         space: SPACE_ID,
//         accessToken: ACCESS_TOKEN,
//         //environment: ENVIRONMENT_ID
//       });
//       client
//         .getEntries()
//         .then((result) => setRecipes(result.items))
//         .catch((err) => console.log(err));
//     }, [])

//     return (
//       <div className="App">
//   <<<<<<< thursdaybranch
//         {
//            recipe.map (item => (<li > {item.fields.title} {item.fields.instructions}</li>) )
//         }

//   return (
//     <div className="App">
//       <Carousel />
//     </div>
//   );
// }

export default App;
