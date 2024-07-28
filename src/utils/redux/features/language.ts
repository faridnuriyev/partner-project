import { createSlice } from "@reduxjs/toolkit";

export interface State {
    lang: string;
    langsArr: any[];
}

const initialState: State = {
    lang: "en",
    langsArr: [],
};

export const slice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLang: (state: any, action: any) => {
            state.lang = action.payload;
        },
        setLangArr: (state: any, action: any) => {
            state.langsArr = action.payload;
        },
        resetLanguage: () => {
            return initialState;
        },
    },
});

export const { setLang, setLangArr, resetLanguage } = slice.actions;
export default slice.reducer;
