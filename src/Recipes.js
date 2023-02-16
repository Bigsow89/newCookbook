import Posts from "./Components/Posts/Posts";
import { useEffect, useState } from "react";
import { client } from "./Client";
const Recipes = () => {
  const [articles, setArticles] = useState([])
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
    <div className="wrapper">
      <Posts posts={articles} />
    </div>
  );
};

export default Recipes
