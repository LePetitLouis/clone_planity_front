import { InputPhoneError, LabelCustom, InputPhoneContainer } from "./InputPhoneStyles";
import PhoneInput from "react-phone-number-input";

import 'react-phone-number-input/style.css';
import { useEffect, useState } from "react";
import { is } from "immer/dist/internal";

interface InputPhoneProps {
    label: string;
    value: any;
    placeholder?: string;
    defaultCountry?: any;
    border?: string;
    error?: string;
    onChange: (value: any) => void;
}

export const InputPhone = ({ label, value, placeholder, defaultCountry, error, border = 'var(--grey-400)', onChange }: InputPhoneProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [borderColor, setBorderColor] = useState(border);
    
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        isFocused ? setBorderColor('var(--primary-500)') : setBorderColor(border);
    }, [isFocused, border]);

    return (
        <InputPhoneContainer className={ isFocused ? 'focused' : '' }>
            <LabelCustom>{label}</LabelCustom>
            <PhoneInput value={value} placeholder={placeholder} defaultCountry={defaultCountry} error={error} onFocus={handleFocus} onBlur={handleBlur} onChange={(value) => onChange(value)} style={{ borderColor: error?.length ? 'var(--danger-200)' : borderColor }} />
            {error?.length ? <InputPhoneError>{error}</InputPhoneError> : null}
        </InputPhoneContainer>
    );
};

export default InputPhone;