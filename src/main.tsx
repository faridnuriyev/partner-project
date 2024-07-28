import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/reset.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./utils/redux/store";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
