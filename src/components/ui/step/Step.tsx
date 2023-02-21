import { ReactNode } from "react";
import { StepContainer, StepHeader, StepTitle, StepNumber } from "./StepStyles";

interface StepProps {
    number: string
    title: string
    children: ReactNode
}

const Step = ({ number, title, children }: StepProps) => {
    return (
        <>
            <StepHeader>
                <StepNumber>{number}.</StepNumber>
                <StepTitle>{title}</StepTitle>
            </StepHeader>
            <StepContainer> 
                {children}
            </StepContainer>
        </>
    );
};

export default Step;