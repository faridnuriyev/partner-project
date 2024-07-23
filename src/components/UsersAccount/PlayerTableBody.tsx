import { TableCell, TableRow } from "@mui/material";
import { format } from "date-fns";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export default function PlayerTableBody({ row }: any) {
    return (
        <TableRow
            key={row.Id}
            className="tableRow"
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
            }}>
            <TableCell component="th" scope="row">
                {row.Username}
            </TableCell>
            <TableCell>{row.Partner}</TableCell>
            <TableCell>
                {format(new Date(row.LastLoginDate), "dd.MM.yyyy HH:mm")}
            </TableCell>
            <TableCell>
                <div className="visibleData">
                    <Link className="visibleData" to={`/player/${row.Id}`}>
                        <VisibilityIcon />
                    </Link>
                </div>
            </TableCell>
        </TableRow>
    );
}
