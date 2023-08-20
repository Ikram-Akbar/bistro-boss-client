import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";


const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Total Selected Items</th>
                        <th>Total Price</th>
                        <th>Payment Option</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-2xl">
                        <td>{cart?.length || 0}</td>
                        <td>$ {totalPrice}</td>
                        <td> <button className="btn btn-warning btn-sm">Pay</button></td>
                    </tr>


                </tbody>
            </table>

        </>
    );
};

export default MyCart;