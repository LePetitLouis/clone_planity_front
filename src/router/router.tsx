import { createBrowserRouter } from "react-router-dom";


import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Category from "../pages/Category";

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
        ],
    }
]);

export default router;