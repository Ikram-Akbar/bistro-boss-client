import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaAlignJustify } from "react-icons/fa";
import { FaList, FaBasketShopping } from "react-icons/fa6";
import useCart from "../Hooks/useCart";



const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;

    return (
        <>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {isAdmin ? <>
                            <li><Link><FaHome></FaHome>Admin Home</Link></li>
                            <li><Link><FaUtensils></FaUtensils>Add Items</Link></li>
                            <li><Link><FaAlignJustify></FaAlignJustify>Manage Items</Link></li>
                            <li><Link><FaBook></FaBook>Manage Booking</Link></li>
                            <li><Link to="/dashboard/allusers"><FaUsers></FaUsers>All Users</Link></li>

                        </> : <>
                            <li><Link><FaHome></FaHome>User Home</Link></li>
                            <li><Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart
                                <div className="badge badge-secondary mx-5">{cart?.length || 0}</div>
                            </Link></li>
                            <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                            <li><Link><FaCalendarAlt></FaCalendarAlt>My Reservation</Link></li>

                        </>}


                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to='/menu'><FaList></FaList>Our Menu</Link></li>
                        <li><Link to='/order/salad'><FaBasketShopping></FaBasketShopping>Order Food</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;