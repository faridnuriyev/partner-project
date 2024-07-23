import "../../assets/style/UserAccount.css";
import LasCreatedPlayers from "./LastCreatedPlayers";

import Topbar from "./Topbar";
import TotalBalance from "./TotalBalance";
import UsersHeader from "./UsersHeader";

export default function UserAccount() {
    return (
        <div className="userAccountContainer">
            <UsersHeader />
            <Topbar />
            <div className="forPadding">
                <TotalBalance />
                <LasCreatedPlayers />
            </div>
        </div>
    );
}
