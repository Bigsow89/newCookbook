import Posts from "./Components/Posts/Posts";
import { useEffect, useState } from "react";
import { client } from "./Client";
import Footer from "./Footer";

const Recipes = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      client
        .getEntries()
        .then((response) => {
          console.log(response);
          setArticles(response.items.filter((item) => item.fields.ingredients));
          setLoading(false);
        })
        .catch(console.error);
    }, 1000); 
  }, []);

  return (
    <div className="wrapper">
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <>
        <Posts posts={articles} />
        <Footer />
        </>
      )}
    </div>
  );
};

export default Recipes