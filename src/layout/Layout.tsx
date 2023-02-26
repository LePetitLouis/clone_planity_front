import { LayoutContainer } from "./LayoutStyles";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    );
};

export default Layout;