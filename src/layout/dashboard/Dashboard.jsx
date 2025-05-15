import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    //TODO: get isAdmin value from the database
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils></FaUtensils>
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaBook></FaBook>
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaBook></FaBook>
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUser></FaUser>
                                        All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Payment History
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history">
                                        <FaCalendar></FaCalendar>
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart {cart.length}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUser></FaUser>
                                        All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Payment Real History
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className='divider'></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaSearch></FaSearch>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact"><FaEnvelope></FaEnvelope>Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;