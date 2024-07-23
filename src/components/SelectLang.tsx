import Select, { components } from "react-select";
import Flag from "react-world-flags";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux";
import { setLang } from "../utils/redux/features/auth";
import { useMemo } from "react";

const Option = (props: any) => {
    const countryNameRefine = props.value === "en" ? "gb" : props.value;
    return (
        <components.Option {...props}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Flag code={countryNameRefine} width={25} /> {props.label}
            </div>
        </components.Option>
    );
};

const Control = ({ children, ...props }: any) => {
    const selectedOption = props.getValue()?.[0] || { label: "", value: "" };
    const countryNameRefine =
        selectedOption.value === "en" ? "gb" : selectedOption.value;
    return (
        <components.Control {...props}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                }}>
                <Flag code={countryNameRefine} width={25} /> {children}
            </div>
        </components.Control>
    );
};

const LanguageSelect = () => {
    const dispatch = useAppDispatch();
    const { lang, langsArr } = useAppSelector((state) => state.auth);

    const defaultValueObj = useMemo(
        () => langsArr.find((l) => l.value === lang),
        [lang]
    );

    const handleChange = (selectedOption: any) => {
        dispatch(setLang(selectedOption.value));
    };

    return (
        <Select
            className="flagStyle"
            components={{ Option, Control }}
            onChange={handleChange}
            defaultValue={defaultValueObj}
            isSearchable={false}
            menuPlacement="top"
            options={langsArr}
        />
    );
};

export default LanguageSelect;
