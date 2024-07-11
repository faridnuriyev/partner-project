import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Login from "./containers/Login";
import Home from "./containers/Home";

const persistor = persistStore(store);

function Router() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </PersistGate>
        </Provider>
    );
}

export default Router;
