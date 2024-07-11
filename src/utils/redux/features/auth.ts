import { createSlice } from "@reduxjs/toolkit";

export interface State {
    isAuthenticated: boolean;
    currentUser: null;
    lang: string;
    siteId: number;
}

const initialState: State = {
    isAuthenticated: false,
    currentUser: null,
    lang: "en",
    siteId: 1,
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
        setLang: (state: any, action: any) => {
            state.lang = action.payload;
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

export const { setUser, setIsAuth, setLang, logout, resetAuth } = slice.actions;
export default slice.reducer;
