import { createBrowserRouter } from "react-router-dom";


import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Results from "../pages/Results";
import Login from "../pages/authentification/Login";
import Register from "../pages/authentification/Register";
import ForgotPassword from "../pages/authentification/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "coiffeur",
                element: <Category />,
            },
            {
                path: "barbier",
                element: <Category />,
            },
            {
                path: "manucure",
                element: <Category />,
            },
            {
                path: "institut-beaute",
                element: <Category />,
            },
            {
                path: "result",
                element: <Results />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "*",
                element: <Home />,
            }
        ],
    }
]);

export default router;