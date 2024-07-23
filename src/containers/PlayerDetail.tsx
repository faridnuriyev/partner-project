import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../utils/hooks/useRedux";
import { useMemo } from "react";

export default function PlayerDetail() {
    const { playerId } = useParams();
    const navigate = useNavigate();
    const players = useAppSelector((state) => state.player.players);

    const playerData = useMemo(
        () => players.find((pl) => pl.Id === Number(playerId)),
        [playerId]
    );
    return (
        <div className="idNavContainer">
            <h2>
                Player ID : <span>{playerId}</span>
            </h2>
            <div>{JSON.stringify(playerData)}</div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
