import React from "react";

import { InputContainer, LabelCustom, InputCustom } from "./InputStyles";

interface InputProps {
    label: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

const Input = ({ label, type, value, placeholder, onChange }: InputProps) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <InputContainer className={ isFocused ? 'focused' : '' }>
            <LabelCustom>{label}
                <InputCustom type={type} value={value} placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} onChange={(event) => onChange(event.target.value)} />
            </LabelCustom>
        </InputContainer>
    );
};

export default Input;