import { useEffect, useState } from "react";
import { InputTextContainer, LabelTextCustom, InputTextCustom, InputTextError } from "../inputText/InputTextStyles";

interface InputTextareaProps {
    label: string;
    colorLabel?: string;
    colorInput?: string;
    border?: string;
    value: string;
    rounded?: boolean;
    height?: string;
    backgroundInputColor?: string;
    placeholder?: string;
    autoComplete?: string;
    error?: string;
    onChange: (value: string) => void;
}

const InputTextarea = ({ label, colorLabel, colorInput, border, value, rounded, height = 'auto', backgroundInputColor, placeholder, error, autoComplete, onChange }: InputTextareaProps) => {
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
        <InputTextContainer className={ isFocused ? 'focused' : '' } style={{ height: height }}>
            <LabelTextCustom style={{ color: colorLabel, height: height }}>{label}
                <InputTextCustom as="textarea" value={value} placeholder={placeholder} autoComplete={autoComplete} border={borderColor} rounded={rounded} backgroundInputColor={backgroundInputColor} height={height} onFocus={handleFocus} onBlur={handleBlur} onChange={(event) => onChange(event.target.value)} style={{ color: colorInput }} />
            </LabelTextCustom>
            { error?.length ? <InputTextError>{error}</InputTextError> : null}
        </InputTextContainer>
    );
};

export default InputTextarea;