import { endpoint } from "../constants/config";
import { store } from "./redux/store";

export default async function http(url: string, data: any = null) {
    try {
        const SiteId = store.getState()?.["partner"]?.["siteId"];
        const lang = store.getState()?.["language"]?.["lang"];
        const PartnerId = store.getState()?.["partner"]?.["partnerId"];
        const res = await fetch(`${endpoint}/${url}`, {
            method: "POST",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                lang,
            },
            body: JSON.stringify({
                SiteId,
                PartnerId,
                IP: "127.0.0.1",
                Browser: "Chrome",
                Device: "Pc",
                OS: "Mac OS",
                ...data,
            }),
        });
        return res.json();
    } catch (error: any) {
        alert(error.toString());
    }
}
