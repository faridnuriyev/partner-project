import { useAppSelector } from "./utils/hooks/useRedux";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { useMemo } from "react";

function Router() {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const Routes = useMemo(
        () => (isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />),
        [isAuthenticated]
    );

    return Routes;
}

export default Router;
