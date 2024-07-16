import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Home from "../pages/HomoComponents/home/Home";
import LogoutProtected from "./LogoutProtected";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<ProtectedRoute><Home></Home></ProtectedRoute>
            }
        ]
    },
     {
         path:'/register',
         element:<LogoutProtected><Register></Register></LogoutProtected>
     },
     {
         path:'/login',
         element:<LogoutProtected><Login></Login></LogoutProtected>
     }
])

export default router;