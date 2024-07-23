import { useState } from "react";
import "../assets/style/accessCard.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Input(props: any) {
    const [isPasswordType, setPasswordType] = useState(false);
    return (
        <div className="passwordInput">
            <input placeholder="Enter your password" {...props} type={isPasswordType ? "password" : "text"} />
            <button onClick={() => setPasswordType((prev) => !prev)}>
                {isPasswordType ? <VisibilityOffIcon/> : <VisibilityIcon/>}
            </button>
        </div>
    );
}
