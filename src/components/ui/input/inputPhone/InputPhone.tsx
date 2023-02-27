import { InputPhoneError, LabelCustom, InputPhoneContainer } from "./InputPhoneStyles";
import PhoneInput from "react-phone-number-input";

import 'react-phone-number-input/style.css';

interface InputPhoneProps {
    label: string;
    value: any;
    placeholder?: string;
    defaultCountry?: any;
    border?: string;
    error?: string;
    onChange: (value: any) => void;
}

export const InputPhone = ({ label, value, placeholder, defaultCountry, error, border = 'var(--grey-500)', onChange }: InputPhoneProps) => {
    return (
        <InputPhoneContainer>
            <LabelCustom>{label}</LabelCustom>
            <PhoneInput value={value} placeholder={placeholder} bor defaultCountry={defaultCountry} error={error} onChange={(value) => onChange(value)} style={{ borderColor: error?.length ? 'var(--danger-200)' : border }} />
            {error?.length ? <InputPhoneError>{error}</InputPhoneError> : null}
        </InputPhoneContainer>
    );
};

export default InputPhone;