import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div>
            <Navbar />
             <Outlet />
        </div>
    );
};

export default MainLayOut;