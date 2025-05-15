import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/HOme";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../shared/secret/Secret";
import Dashboard from "../layout/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import AllUsers from "../pages/dashboard/allusers/AllUsers";
import AddItems from "../pages/dashboard/additems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import UpdateItem from "../pages/dashboard/updateitem/updateItem";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../layout/dashboard/paymentHistory/PaymentHistory";
import UserHome from "../pages/dashboard/userHome/UserHome";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/userHome',
                element: <UserHome></UserHome>
            },
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // admin routes
            {
                path: '/dashboard/adminHome',
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },

            {
                path: '/dashboard/updateItem/:id',
                element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: '/dashboard/manageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            }
        ]
    }
]);