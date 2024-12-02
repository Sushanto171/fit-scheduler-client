import { Link, NavLink } from "react-router";


const Navbar = () => {

    const links = <>
        <li><NavLink to="/"> Home</NavLink></li>
        <li><NavLink to="/allSchedule"> All Schedule</NavLink></li>
        <li><NavLink to="/addSchedule"> Add Schedule</NavLink></li>
        <li><NavLink to="/login"> Log in</NavLink></li>
        <li><NavLink to="/signUp"> Sign Up</NavLink></li>
    
    </>
    return (
        <nav>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-300 w-full px-10">
                    <div className="flex-none md:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 stroke-current">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 justify-end md:justify-start px-2">
                        <Link to={"/"}><p className="font-bold text-lg">Fit Scheduler</p></Link>
                    </div>
                    <div className="hidden flex-none md:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                            {links}
                        </ul>
                    </div>
                    </div>
                    {/* Page content here */}
                 
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                        {links}
                    </ul>
                </div>
                </div>
        </nav>
    );
};

export default Navbar;