import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)({
    background: "#146e51",
    marginTop: "15px",
    border: "1px dashed #ffdb07",
    borderRadius: "5px",
    color: "white",
    width: "50%",
    padding: "10px",
    "&:hover": {
        backgroundColor: "#26a77d",
        borderColor: "#26a77d",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#26a77d",
        borderColor: "#26a77d",
    },
});

export default function NotFound() {
    let navigate = useNavigate();
    let returnBack = () => {
        navigate("/");
    };

    return (
        <div
            style={{
                background: "#282828",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <h2 style={{ color: "white" }}>Error Not Found,Please go back</h2>
            <CustomButton onClick={returnBack}>Return</CustomButton>
        </div>
    );
}
