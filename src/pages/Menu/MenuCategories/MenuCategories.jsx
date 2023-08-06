import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategories = ({items, title,coverImg}) => {
    return (
      <>
        {title && <Cover img={coverImg} title={title}></Cover>}
        <div className=" grid md:grid-cols-2 gap-10 my-16 px-16 py-2">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-5">
          <button className="btn btn-outline btn-primary mt-2 border-0 border-b-4  ">
            Order Now
          </button>
        </div>
      </>
    );
};

export default MenuCategories;