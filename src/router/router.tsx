import { createBrowserRouter } from "react-router-dom";


import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Hairdresser from "../pages/Hairdresser";
import Barber from "../pages/Barber";
import Manicure from "../pages/Manicure";
import BeautyInstitute from "../pages/BeautyInstitute";

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
                element: <Hairdresser />,
            },
            {
                path: "barbier",
                element: <Barber />,
            },
            {
                path: "manucure",
                element: <Manicure />,
            },
            {
                path: "institut-beaute",
                element: <BeautyInstitute />,
            },
        ],
    }
]);

export default router;