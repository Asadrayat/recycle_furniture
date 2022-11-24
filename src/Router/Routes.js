import Why from "../Pages/Home/Why/Why";
import Login from "../Pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: Signup } = require("../Pages/Signup/SignUp");

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children :[
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : 'signup',
                element : <Signup></Signup>
            },
            {
                path : '/why',
                element : <Why></Why>
            }
        ]
    }
])

export default router;