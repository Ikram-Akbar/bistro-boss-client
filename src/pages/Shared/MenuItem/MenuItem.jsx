

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  console.log(item.image);
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[50px] rounded-full "
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-3xl">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 font-semibold ">$ {price} </p>
      
    </div>
  );
};

export default MenuItem;