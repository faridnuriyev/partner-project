import http from "./http";


function getLang() {
    try {
      return http("/getavailablelanguages")
    } catch (error: any) {
        alert(error.toString());
    }
}

function login(Username: string, Password: string) {
    try {
        return http("/login", {
            Username,
            Password
        })
    } catch (error: any) {
        alert(error.toString());
    }
}

function playerList() {
    try {
        return http("/partnerplayerlist", {
            Start: 0,
            End: 10,
            Direct: false,
        });
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
