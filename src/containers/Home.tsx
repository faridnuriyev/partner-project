import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/redux/features/auth";

export default function Home() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    );
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated]);
    
    function logoutAction() {
        dispatch(logout());
    }

    return (
        <div>
            Home page
            <button onClick={logoutAction}>Logout</button>
        </div>
    );
}
