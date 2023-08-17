import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = item => {
    console.log(item);
    if (user) {
      fetch('http://localhost:3002/carts')
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart.',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',)
        }
      })
    }
  }

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
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline btn-primary mt-2 border-0 border-b-4" >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

