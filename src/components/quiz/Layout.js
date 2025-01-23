import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
                <Link to="/"> <button>Register</button> </Link>
                <Link to="/Login"> <button>Login</button> </Link>
            </nav>
            <Outlet />
        </>
    );
};
export default Layout;