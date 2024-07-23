import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
} from "@reduxjs/toolkit";
import auth from "./features/auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { isProd } from "../../constants/config";
import player from "./features/player";

const persistConfig = {
    key: "dashboard",
    whitelist: ["auth", "player"],
    blacklist: [],
    storage,
};

const reducers = combineReducers({
    auth,
    player,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: !isProd,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
