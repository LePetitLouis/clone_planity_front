import React, { useState } from "react";

import { InputContainer, LabelCustom, InputCustom, SuggestionsContainer, SuggestionsList, SuggestionsItem } from "./InputStyles";

interface InputProps {
    label: string;
    colorLabel?: string;
    colorInput?: string;
    type: string;
    value: string;
    placeholder?: string;
    suggestions?: string[];
    onChange: (value: string) => void;
}

const Input = ({ label, colorLabel, colorInput, type, value, placeholder, suggestions, onChange }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        setShowSuggestions(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setShowSuggestions(false);
    };

    const handleClickSuggestion = (value: string) => {
        console.log('click', value);
        onChange(value);
        handleBlur();
    };

    return (
        <InputContainer className={ isFocused ? 'focused' : '' }>
            <LabelCustom style={{ color: colorLabel }}>{label}
                <InputCustom type={type} value={value} placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} onChange={(event) => onChange(event.target.value)} style={{ color: colorInput }} />
            </LabelCustom>
            {/* TODO BUG: the click on the suggestion is broken because the container suggestions is show when input focus */}
            { (suggestions && showSuggestions) && <SuggestionsContainer>
                <SuggestionsList>
                    {suggestions && suggestions.map((suggestion, index) => (
                    <SuggestionsItem key={index} onClick={() => handleClickSuggestion(suggestion)}>{suggestion}</SuggestionsItem>
                    ))}
                </SuggestionsList>
            </SuggestionsContainer> }
        </InputContainer>
    );
};

export default Input;