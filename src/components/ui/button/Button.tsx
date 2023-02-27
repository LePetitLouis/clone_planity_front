import React from "react";

import { ButtonCustom } from "./ButtonStyles";

interface ButtonProps {
    children: React.ReactNode;
    rounded?: boolean;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    height?: string;
    width?: string;
    margin?: string;
    disabled?: boolean;
    onClick: () => void;
}

const Button = ({ children, rounded, color, backgroundColor, borderColor, height, width, margin, disabled, onClick }: ButtonProps) => {
    return <ButtonCustom onClick={onClick} disabled={disabled} rounded={rounded} color={color} backgroundColor={backgroundColor} borderColor={borderColor} height={height} width={width} margin={margin}>{children}</ButtonCustom>;
};

export default Button;