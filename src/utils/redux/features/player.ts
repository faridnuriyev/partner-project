import { createSlice } from "@reduxjs/toolkit";

export interface State {
    players: any []
}

const initialState: State = {
    players: []
};

export const slice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setPlayers: (state: any, action: any) => {
            state.players = action.payload;
        },
        resetPlayer: () => {
            return initialState;
        },
    },
});

export const { setPlayers, resetPlayer } = slice.actions;
export default slice.reducer;
