import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <FeaturedItem></FeaturedItem>
    </>
  );
};

export default Home;
