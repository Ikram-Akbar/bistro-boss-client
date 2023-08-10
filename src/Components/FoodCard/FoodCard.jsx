const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-700 text-white px-4 py-2 font-bold">
        $ {price}
      </p>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline btn-primary mt-2 border-0 border-b-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
