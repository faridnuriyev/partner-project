import { Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
