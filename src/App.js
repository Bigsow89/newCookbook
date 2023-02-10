import React from "react";
import "./App.css";
import { client } from "./Client";
import Posts from "./Components/Posts/Posts";
import Carousel from "./Components/Carousel/Carousel";
import Loader from "./Components/Loader/Loader";
import Cards from "./Cards";

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
      <div className="App-body">
        <Carousel />
        <Cards />

        <div className="container">
          <header>
            <div className="wrapper"></div>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
