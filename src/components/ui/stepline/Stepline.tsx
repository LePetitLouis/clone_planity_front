import { SteplineContainer, SteplineStep, SteplineLine } from "./SteplineStyles";

interface SteplineProps {
    steps: string[];
    activeStep: number;
    onClick: (step: number) => void;
}

const Stepline = ({ steps, activeStep, onClick }: SteplineProps) => {
    const handleSelectedStep = (step: number) => {
        step < activeStep && onClick(step);
    };

    return (
        <SteplineContainer>
            {steps.map((step, index) => (
                <>
                <SteplineStep key={index} active={index + 1 <= activeStep} onClick={() => handleSelectedStep(index+1)}>
                    {step}
                </SteplineStep>
                {index + 1 !== steps.length && <SteplineLine active={index + 1 < activeStep} />}
                </>
            ))}
        </SteplineContainer>
    );
};

export default Stepline;