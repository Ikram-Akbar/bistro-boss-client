import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategories from "../MenuCategories/MenuCategories";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
const Menu = () => {
    const [menu] = useMenu();
    const offeredItems = menu.filter((item) => item.category === "offered");
    const pizzaItems = menu.filter((item) => item.category === "pizza");
    const dessertItems = menu.filter((item) => item.category === "dessert");
    const saladItems = menu.filter((item) => item.category === "salad");
    const soupItems = menu.filter((item) => item.category === "soup");
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Menu </title>
        </Helmet>
        <Cover img={img} title="Our Menu "></Cover>
        {/* Today's offer _ MenuItems */}
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"Today's Offer"}
        ></SectionTitle>
        <MenuCategories items={offeredItems}></MenuCategories>
        {/* Dessert menu items */}
        <MenuCategories
          items={dessertItems}
          title={"Dessert Items"}
          coverImg={dessertImg}
        ></MenuCategories>

        {/* pizza menu items */}
        <MenuCategories
          items={pizzaItems}
          title={"Pizza"}
          coverImg={pizzaImg}
        ></MenuCategories>
        {/* soup menu items */}
        <MenuCategories
          items={soupItems}
          title={"Soup "}
          coverImg={soupImg}
        ></MenuCategories>
        {/* salad menu items */}
        <MenuCategories
          items={saladItems}
          title={"Special Salad"}
          coverImg={saladImg}
        ></MenuCategories>
      </div>
    );
};

export default Menu;
