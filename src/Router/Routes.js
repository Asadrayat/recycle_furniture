import Blog from "../Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Allusers from "../Pages/Home/Dashboard/Allusers/Allusers";
import Why from "../Pages/Home/Why/Why";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Shared/DashboardLayout/DashboardLayout";
import DisplayError from "../Shared/DisplayError/DisplayError";
import MyAppointment from "../Shared/MyAppointment/MyAppointment";
import PrivateRoute from "./PrivateRoute";
import Privateroute from "./PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: Signup } = require("../Pages/Signup/SignUp");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/catagoryOptions/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagoryOptions/${params.id}`)
            },
            {
                path: '/why',
                element: <Why></Why>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <Allusers></Allusers>
            },
        //     {
        //         path: '/dashboard/managedoctors',
        //         element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
        //     },
        //     {
        //         path: '/dashboard/adddoctor',
        //         element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        //     },
        //     {
        //         path: '/dashboard/payment/:id',
        //         element: <Payment></Payment>,
        //         loader: ({ params }) => fetch(`https://doctors-server-two.vercel.app/bookings/${params.id}`)
        //     }
        ]
    },
])

export default router;