import { InputPhoneError, LabelCustom } from "./InputPhoneStyles";
import PhoneInput from "react-phone-number-input";

import 'react-phone-number-input/style.css';

interface InputPhoneProps {
    label: string;
    value: any;
    placeholder?: string;
    defaultCountry?: any;
    error?: string;
    onChange: (value: any) => void;
}

export const InputPhone = ({ label, value, placeholder, defaultCountry, error, onChange }: InputPhoneProps) => {
    return (
        <>
        <LabelCustom>{label}</LabelCustom>
        <PhoneInput value={value} placeholder={placeholder} defaultCountry={defaultCountry} error={error} onChange={(value) => onChange(value)} style={{ borderColor: error?.length && 'var(--danger-200)' }} />
        {error?.length ? <InputPhoneError>{error}</InputPhoneError> : null}
        </>
    );
};

export default InputPhone;