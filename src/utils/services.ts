import { endpoint } from "../constants/config";
import { store } from "./redux/store";

function getLang() {
    try {
        const SiteId = store.getState()?.["auth"]?.["siteId"];
        return fetch(endpoint + "/getavailablelanguages", {
            method: "POST",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                lang: "en",
            },
            body: JSON.stringify({
                SiteId,
            }),
        }).then((r) => r.json());
    } catch (error: any) {
        alert(error.toString());
    }
}

function login(Username: string, Password: string) {
    try {
        const SiteId = store.getState()?.["auth"]?.["siteId"];
        const PartnerId = store.getState()?.["auth"]?.["partnerId"];
        return fetch(endpoint + "/login", {
            method: "POST",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                lang: "en",
            },
            body: JSON.stringify({
                Username,
                Password,
                SiteId,
                PartnerId,
                IP: "127.0.0.1",
                Browser: "Chrome",
                Device: "Pc",
                OS: "Mac OS",
            }),
        }).then((r) => r.json());
    } catch (error: any) {
        alert(error.toString());
    }
}

function playerList() {
    try {
        const SiteId = store.getState()?.["auth"]?.["siteId"];
        const PartnerId = store.getState()?.["auth"]?.["partnerId"];
        // const SessionKey =
        //     store.getState()?.["auth"]?.["currentUser"]?.["SessionKey"];
        return fetch(endpoint + "/partnerplayerlist", {
            method: "POST",
            // headers: {
            //     SessionKey: SessionKey ?? "",
            // },
            headers: {
                "content-type": "application/json; charset=UTF-8",
                lang: "en",
            },
            body: JSON.stringify({
                PartnerId,
                Start: 0,
                End: 10,
                SiteId,
                Direct: false,
            }),
        }).then((response) => response.json());
    } catch (error: any) {
        alert(error.toString());
    }
}

const services = {
    getLang,
    login,
    playerList,
};

export default services;
