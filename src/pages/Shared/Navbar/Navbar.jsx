import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

// react toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useAuth();

    // logout
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.warning('User logged out');
        })
        .catch()
    }

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/assignments">Assignment</Link></li>
        <li><Link to="/create_assignments">Create Assignments</Link></li>
        <li><Link to="/pending_assignments">Pending Assignments</Link></li>
    </>

    return (
        <div className="bg-[#e0dbd8]">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Study Platform</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (<div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold gap-2">
                            <li><Link to="/my_submited_assignm">My Assignments</Link></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>)
                        : <div className="flex gap-2">
                            <Link to="/login">
                                <button className="btn bg-gray-600 text-white border-none">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn bg-gray-600 text-white border-none">Register</button>
                            </Link>
                        </div>}




                </div>
            </div>
        </div >
    );
};

export default Navbar;