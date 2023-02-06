import { useEffect, useState } from 'react';

import { InputTextContainer, LabelTextCustom, InputTextCustom, InputTextError } from './InputTextStyles';

interface InputTextProps {
    label: string;
    colorLabel?: string;
    colorInput?: string;
    border?: string;
    type: string;
    value: string;
    rounded?: boolean;
    height?: string;
    backgroundInputColor?: string;
    placeholder?: string;
    error?: string;
    onChange: (value: string) => void;
}

const InputText = ({ label, colorLabel, colorInput, border, type, value, rounded, height, backgroundInputColor, placeholder, error, onChange }: InputTextProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [borderColor, setBorderColor] = useState(border);

    useEffect(() => {
        error?.length ? setBorderColor('var(--danger-200)') : setBorderColor(border);
    }, [error, border]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <InputTextContainer className={ isFocused ? 'focused' : '' }>
            <LabelTextCustom style={{ color: colorLabel }}>{label}
                <InputTextCustom type={type} value={value} placeholder={placeholder} border={borderColor} rounded={rounded} height={height} backgroundInputColor={backgroundInputColor} onFocus={handleFocus} onBlur={handleBlur} onChange={(event) => onChange(event.target.value)} style={{ color: colorInput }} />
            </LabelTextCustom>
            { error?.length ? <InputTextError>{error}</InputTextError> : null}
        </InputTextContainer>
    );
};

export default InputText;