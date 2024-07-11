import { createSlice } from "@reduxjs/toolkit";

export interface State {
    isAuthenticated: boolean;
    currentUser: null;
    lang: string;
}

const initialState: State = {
    isAuthenticated: false,
    currentUser: null,
    lang: "en",
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
            state.isAuthenticated = action.payload;
        },
        logout: () => {
            return initialState;
        },
    },
});

export const { setUser, setIsAuth, setLang, logout } = slice.actions;
export default slice.reducer;
