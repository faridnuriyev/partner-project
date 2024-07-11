import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

function Router() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/login" element={<div>Login</div>} />
                </Routes>
            </PersistGate>
        </Provider>
    );
}

export default Router;
