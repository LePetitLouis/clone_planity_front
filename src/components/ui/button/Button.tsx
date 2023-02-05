import React from "react";

import { ButtonCustom } from "./ButtonStyles";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return <ButtonCustom onClick={onClick}>{children}</ButtonCustom>;
};

export default Button;