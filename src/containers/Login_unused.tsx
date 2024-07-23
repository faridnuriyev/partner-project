import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux";
import { setIsAuth, setLang } from "../utils/redux/features/auth";
import { useNavigate } from "react-router-dom";
import "../assets/style/login.css";

import AccessCard from "../components/AccessCard";

export default function LoginUnused() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, lang } = useAppSelector((state) => state.auth);

    function loginAction() {
        dispatch(setIsAuth(true as never));
        dispatch(setLang("tr" as never));
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    return (
        <div className="loginContainer">
            Is Authenticated: {isAuthenticated ? "Yes" : "No"}
            <br />
            Language: {lang}
            <br />
            <div className="leftSideLogin">
                <AccessCard />
                <button onClick={loginAction}>Login</button>
            </div>
            <div className="rightSideLogin"> </div>
        </div>
    );
}
