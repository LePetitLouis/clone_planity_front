import React, { useState } from "react";

import { InputContainer, LabelCustom, InputCustom, SuggestionsContainer, SuggestionsList, SuggestionsItem } from "./InputStyles";

interface InputProps {
    label: string;
    colorLabel?: string;
    colorInput?: string;
    type: string;
    value: string;
    focus?: boolean;
    placeholder?: string;
    suggestions?: string[];
    onChange: (value: string) => void;
}

const Input = ({ label, colorLabel, focus, colorInput, type, value, placeholder, suggestions, onChange }: InputProps) => {
    const [isFocused, setIsFocused] = useState(focus || false);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        setShowSuggestions(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setTimeout(() => {
            setShowSuggestions(false);
        }, 200);
    };

    const handleClickSuggestion = (value: string) => {
        onChange(value);
        handleBlur();
    };

    return (
        <InputContainer className={ isFocused ? 'focused' : '' }>
            <LabelCustom style={{ color: colorLabel }}>{label}
                <InputCustom type={type} value={value} placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} onChange={(event) => onChange(event.target.value)} style={{ color: colorInput }} />
            </LabelCustom>
            { (suggestions && showSuggestions) && <SuggestionsContainer>
                <SuggestionsList>
                    {suggestions && suggestions.map((suggestion, index) => (
                    <SuggestionsItem className="suggestions-item" key={index} onClick={() => handleClickSuggestion(suggestion)}>{suggestion}</SuggestionsItem>
                    ))}
                </SuggestionsList>
            </SuggestionsContainer> }
        </InputContainer>
    );
};

export default Input;