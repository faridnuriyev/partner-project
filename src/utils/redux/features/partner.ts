import { createSlice } from "@reduxjs/toolkit";

export interface State {
    siteId: number;
    partnerId: number;
}

const initialState: State = {
    siteId: 1,
    partnerId: 23,
};

export const slice = createSlice({
    name: "partner",
    initialState,
    reducers: {
        resetPartner: () => {
            return initialState;
        },
    },
});

export const { resetPartner } = slice.actions;
export default slice.reducer;
