import { logout } from "../../utils/redux/features/auth";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";

import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "../../assets/style/UserAccount.css";

export default function UsersHeader() {
    const dispatch = useAppDispatch();

    const currentUser = useAppSelector((state) => state.auth.currentUser);

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
