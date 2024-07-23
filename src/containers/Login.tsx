import { useNavigate } from "react-router-dom";
import "../assets/style/login.css";
import AccessCard from "../components/AccessCard";
import SelectLang from "../components/SelectLang";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux";
import { useEffect } from "react";
import services from "../utils/services";
import { setLangArr } from "../utils/redux/features/auth";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    async function getAvailableLanguages() {
        const response = await services.getLang();
        if (!response) return;
        dispatch(
            setLangArr(
                response?.map((r: any) => ({
                    label: r.Name,
                    value: r.Id,
                }))
            )
        );
    }
    useEffect(() => {
        getAvailableLanguages();
    }, []);
    return (
        <div className="loginContainer">
            <div className="leftSideLogin">
                <div className="foxtippLogo">
                    <h2>
                        fox<span>tipp</span>
                    </h2>
                </div>
                <AccessCard />
                <SelectLang />
            </div>
            <div className="rightSideLogin"> </div>
        </div>
    );
}
