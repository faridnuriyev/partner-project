import * as React from "react";
import "../assets/style/accessCard.css";
import CButton from "../components/Button";
import Input from "../components/Input";
import services from "../utils/services";

import { useAppDispatch } from "../utils/hooks/useRedux";
import { setIsAuth, setUser } from "../utils/redux/features/auth";

export default function AccessCard() {
    const dispatch = useAppDispatch();

    const [username, setUsername] = React.useState("emrepartner");
    const [password, setPassword] = React.useState("123456");

    async function loginAction(e: any) {
        e.preventDefault();
        if (!username.length || !password.length) {
            return alert("Please check your inputs");
        }
        const response = await services.login(username, password);

        if (!response?.Id) {
            return alert("Error");
        }
        dispatch(setIsAuth(true as never));
        dispatch(setUser(response));
    }

    return (
        <div className="cardContainer">
            <div className="cardLogo">
                <img src={"src/assets/img/partnership.png"} />
                <div className="cardLogoText">
                    <h2>
                        Partnership
                        <br />
                        <span>Welcome to Partner Panel</span>
                    </h2>
                </div>
            </div>
            <form onSubmit={loginAction}>
                <div className="userName">
                    <h4>Username</h4>
                    <input
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="passWord">
                    <h4>Password</h4>
                    <Input
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <CButton type="submit">Login</CButton>
                </div>
            </form>
        </div>
    );
}
