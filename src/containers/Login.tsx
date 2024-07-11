import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux";
import { setIsAuth, setLang } from "../utils/redux/features/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
        <div>
            Is Authenticated: {isAuthenticated ? "Yes" : "No"}
            <br />
            Language: {lang}
            <br />
            <button onClick={loginAction}>Login</button>
        </div>
    );
}
