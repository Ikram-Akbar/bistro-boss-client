import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3002/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
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


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr
                            key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>
                                {item?.name}
                            </td>
                            <td className="text-end">${item?.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-md text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>

                </table>
            </div>

        </>
    );
};

export default MyCart;