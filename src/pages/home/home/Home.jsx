import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
