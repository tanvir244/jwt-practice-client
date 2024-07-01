import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <div className="text-center mt-8"><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default ProtectedRoute;
