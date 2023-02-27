import { createBrowserRouter } from "react-router-dom";

// Layout pages
import Layout from "../layout/Layout";
import LayoutDash from "../layout/dash/LayoutDash";

// Open access page
import Home from "../pages/Home";
import Category from "../pages/Category";
import Results from "../pages/Results";
import DetailsShop from "../pages/DetailsShop";
import Booking from "../pages/Booking";

// Authentification pages
import Login from "../pages/authentification/Login";
import Register from "../pages/authentification/Register";
import ForgotPassword from "../pages/authentification/ForgotPassword";
import TraderRegister from "../pages/authentification/TraderRegister";

// Dashboard pages
import HomeDash from "../pages/traderDash/HomeDash";
import CalendarDash from "../pages/traderDash/CalendarDash";
import HomeUserDash from "../pages/userDash/home/HomeUserDash";

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
                path: "details-shop/:id",
                element: <DetailsShop />,
            },
            {
                path: "booking",
                element: <Booking />,
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
                path: "my-account",
                element: <HomeUserDash />
            },
            {
                path: "dashbord-trader",
                element: <HomeDash />
            },
            {
                path: "*",
                element: <Home />,
            }
        ],
    },
    {
        path: "/pro",
        children: [
        {
            path: "*",
            element: <TraderRegister />,
        },
        {
            path: "register",
            element: <TraderRegister />,
        }
        ],
    },
    {
        path: "dashboard",
        element: <LayoutDash />,
        children: [
            {
                path: "*",
                element: <HomeDash />,
            },
            {
                path: "calendar",
                element: <CalendarDash />,
            }
        ],
    }
]);

export default router;