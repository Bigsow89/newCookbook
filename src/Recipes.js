import Posts from "./Components/Posts/Posts";
const Recipes = ({ articles }) => {
  return (
    <div className="wrapper">
      <Posts posts={articles} />
    </div>
  );
};

export default Recipes
