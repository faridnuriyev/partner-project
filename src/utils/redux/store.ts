import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
} from "@reduxjs/toolkit";
import auth from "./features/auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import player from "./features/player";
import partner from "./features/partner";
import language from "./features/language";

const persistConfig = {
    key: "dashboard",
    whitelist: ["auth", "player", "language", "partner"],
    blacklist: [],
    storage,
};

const reducers = combineReducers({
    auth,
    player,
    language,
    partner,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: !import.meta.env.PROD,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
