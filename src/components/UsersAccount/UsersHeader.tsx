import { logout } from "../../utils/redux/features/auth";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "../../assets/style/UserAccount.css";


export default function UsersHeader() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    );
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated]);

    function logoutAction() {
        dispatch(logout());
    }

    return (
        <div className="uHeader">
            <MenuIcon />
            <h2>
                fox<span>tipp</span>
            </h2>
            <div className="emrepartner">
                <span>{currentUser?.Username || "emrepartner"}</span>
                <div className="accLogo">
                    <PermIdentityOutlinedIcon className="identityIcon" />
                </div>
                <button className="logOutButton" onClick={logoutAction}>
                    LogOut
                </button>
            </div>
        </div>
    );
}
