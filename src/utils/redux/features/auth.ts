import { createSlice } from "@reduxjs/toolkit";

export interface State {
    isAuthenticated: boolean;
    currentUser: {
        SessionKey: string;
        Id: number;
        SiteId: number;
        SiteName: string;
        SiteDomain: string;
        Active: boolean;
        Name: string;
        Username: string;
        Email: string;
        Currency: string;
        Language: string;
        Credit: number;
        Balance: number;
        LastLogin: string;
        LastLoginIp: string;
        CustomOddPermitted: boolean;
        Theme: string;
        Wallpaper: string;
        CanCancelTicket: boolean;
        CanViewCountry: boolean;
        CanDeposit: boolean;
        DebitOnly: boolean;
        CanCreatePartner: boolean;
        IsEmployee: boolean;
        Timezone: number;
        UpperLevel: number;
        TimeZoneName: string;
        PartnerType: string;
        UseCasinoBalance: boolean;
    } | null;
  
   
}

const initialState: State = {
    isAuthenticated: false,
    currentUser: null,

};

export const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state: any, action: any) => {
            state.currentUser = action.payload;
        },
        setIsAuth: (state: any, action: any) => {
            state.isAuthenticated = action.payload;
        },
        logout: (state: any) => {
            state.isAuthenticated = false;
            state.currentUser = null;
        },
        resetAuth: () => {
            return initialState;
        },
    },
});

export const { setUser, setIsAuth, logout, resetAuth } =
    slice.actions;
export default slice.reducer;
