import React from "react";

import { ButtonCustom } from "./ButtonStyles";

interface ButtonProps {
    children: React.ReactNode;
    rounded?: boolean;
    color?: string;
    backgroundColor?: string;
    height?: string;
    onClick: () => void;
}

const Button = ({ children, rounded, color, backgroundColor, height, onClick }: ButtonProps) => {
    return <ButtonCustom onClick={onClick} rounded={rounded} color={color} backgroundColor={backgroundColor} height={height}>{children}</ButtonCustom>;
};

export default Button;