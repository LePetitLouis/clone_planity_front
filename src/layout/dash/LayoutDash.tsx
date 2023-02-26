import { Outlet, Navigate } from "react-router-dom";

import { useAppSelector } from "../../store/hook";
import { selectAuth } from "../../store/slice/authSlice";

const LayoutDash = () => {
    const auth = useAppSelector(selectAuth)

    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    );
};

export default LayoutDash;