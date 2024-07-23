import getSymbolFromCurrency from "currency-symbol-map";
import { NumericFormat } from "react-number-format";
import "../../assets/style/UserAccount.css";
import { useAppSelector } from "../../utils/hooks/useRedux";

export default function TotalBalance() {
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    let currency = getSymbolFromCurrency(`${currentUser?.Currency}`);
    return (
        <div className="totalBalance">
            <NumericFormat
                value={currentUser?.Balance}
                className="foo"
                displayType={"text"}
                thousandSeparator={true}
                prefix={currency}
            />
            <h3>Total Balance</h3>
        </div>
    );
}
