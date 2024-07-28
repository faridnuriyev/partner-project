import "../assets/style/login.css";
import AccessCard from "../components/AccessCard";
import SelectLang from "../components/SelectLang";
import { useAppDispatch } from "../utils/hooks/useRedux";
import { useEffect } from "react";
import services from "../utils/services";
import { setLangArr } from "../utils/redux/features/language";

export default function Login() {
    const dispatch = useAppDispatch();

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
