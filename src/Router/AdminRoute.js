import { useContext } from "react";
import { LoaderIcon } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider/Authprovider";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return LoaderIcon
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;