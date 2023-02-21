import { BenefitCardContainer, BenefitCardContent, BenefitCardDescription, BenefitCardTitle, BenefitCardTime, BenefitCardPrice } from "./BenefitCardStyles";
import Button from "../../button/Button";

import { IBenefit } from "../../../../index.d";

interface BenefitCardProps {
    benefit: IBenefit;
    onClick: (value: IBenefit) => void
}

const BenefitCard = ({ benefit, onClick }: BenefitCardProps) => {
    return (
        <BenefitCardContainer onClick={() => onClick(benefit)}>
            <BenefitCardContent>
                <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                {benefit.description && <BenefitCardDescription>{benefit.description}</BenefitCardDescription>}
            </BenefitCardContent>
            <BenefitCardTime>{benefit.time}</BenefitCardTime>
            {benefit.price && <BenefitCardPrice>{benefit.price}</BenefitCardPrice>}
            <Button onClick={() => ''} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Choisir</Button>
        </BenefitCardContainer>
    );
};

export default BenefitCard;
