import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
                <Link to="/"> <button>Register</button> </Link>
                <Link to="/Login"> <button>Login</button> </Link>
                <Link to="/orders"> <button>Orders</button> </Link>
                {/* <Link to ="/DashBoard"></Link> */}
            </nav>
            <Outlet />
        </>
    );
};
export default Layout;