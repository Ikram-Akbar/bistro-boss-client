import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading="Popular Items"
        heading="from our Menu"
      ></SectionTitle>
      <div className=" grid md:grid-cols-2 gap-4">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <button className="btn btn-outline btn-primary mt-2 border-0 border-b-4  ">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
