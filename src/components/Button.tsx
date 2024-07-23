import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButton = styled(Button)({
    background: "#146e51",
    marginTop:"15px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    width: "100%",
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

export default function CButton(
    props: ButtonProps & {
        children: React.ReactElement | string;
    }
) {
    return (
        <CustomButton variant="contained" {...props}>
            {props?.children}
        </CustomButton>
    );
}
