import React from "react";
import "./App.css";
import { client } from "./Client";
import Posts from "./Components/Posts/Posts";
import Carousel from "./Components/Carousel/Carousel";
import Loader from "./Components/Loader/Loader";
import Cards from './Cards';


function App() {
  return (
    <div className="App">

     

      <Carousel />
      <Cards /> 

    </div>
  );


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

export default App;
