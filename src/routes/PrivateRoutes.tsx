import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import PlayerDetail from "../containers/PlayerDetail";
import NotFound from "../containers/NotFound";

export default function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player/:playerId" element={<PlayerDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
