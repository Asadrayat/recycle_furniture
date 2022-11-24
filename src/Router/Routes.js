import Why from "../Pages/Home/Why/Why";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: Login } = require("../Pages/Login/Login");

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
                path : '/why',
                element : <Why></Why>
            },
        ]
    }
])

export default router;