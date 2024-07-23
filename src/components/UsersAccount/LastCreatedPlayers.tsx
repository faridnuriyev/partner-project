import { useEffect } from "react";
import "../../assets/style/UserAccount.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import services from "../../utils/services";
import PlayerTableBody from "./PlayerTableBody";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";
import { setPlayers } from "../../utils/redux/features/player";

export default function LasCreatedPlayers() {
    const dispatch = useAppDispatch();
    const players = useAppSelector((state) => state.player.players);

    async function getPlayers() {
        const response = await services.playerList();
        dispatch(setPlayers(response));
    }
    useEffect(() => {
        getPlayers();
    }, []);

    return (
        <div className="lastCreatedPlayers">
            <h4>Last Created Players</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="tHead">
                        <TableRow style={{ backgroundColor: "#063d2c" }}>
                            <TableCell>Username</TableCell>
                            <TableCell>Partner</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="tableBody">
                        {players?.map((row: any) => (
                            <PlayerTableBody key={row.Id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
