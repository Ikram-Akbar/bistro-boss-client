import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import Swal from "sweetalert2";



const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:3002/users")
        return res.json();
    });

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:3002/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleDelete = () => {

    }
    return (
        <>
            <Helmet>
                <title>Bistro | Admin </title>
            </Helmet>
            <div className="w-full">
                <div className="text-3xl font-semibold m-4">
                    <h5> You have  {users.length}  users </h5>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role == "admin" ? <button className="btn btn-ghost btn-md "><FaShield></FaShield></button>: <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-md bg-lime-600"><FaUsers></FaUsers></button>}</td>
                                    <td> <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-md text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;