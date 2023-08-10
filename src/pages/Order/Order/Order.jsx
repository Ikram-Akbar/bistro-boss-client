import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/order/order-cover-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "dessert", "soup", "pizza", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  
  const drinkItems = menu.filter((item) => item.category === "drinks");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Order </title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order Food !!"}></Cover>
      <div className="my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={saladItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessertItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soupItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzaItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinkItems}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
