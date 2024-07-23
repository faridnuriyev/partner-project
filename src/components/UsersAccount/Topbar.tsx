import "../../assets/style/UserAccount.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAppSelector } from "../../utils/hooks/useRedux";

export default function Topbar() {
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    return (
        <>
            <div className="topbarContainer">
                <div className="textArea">
                    <span>Hello {currentUser?.Name}</span>
                    <h4>
                        <b>Your dashboard</b>
                    </h4>
                </div>
                <NotificationsIcon className="bellForHell" />
            </div>
        </>
    );
}
