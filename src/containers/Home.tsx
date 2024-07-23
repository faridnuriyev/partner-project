// import { useEffect, useState } from "react";
import { useEffect } from "react";
import "../assets/style/home.css";
import "../assets/style/UserAccount.css";
import UserAccount from "../components/UsersAccount/UserAccount";
import services from "../utils/services";
// import services from "../utils/services";

export default function Home() {
    useEffect(() => {
        services.getLang();
    }, []);

    return (
        <div>
            <UserAccount />

            {/* <button>Logout</button> */}
        </div>
    );
}
