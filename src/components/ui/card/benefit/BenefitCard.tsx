import { BenefitCardContainer, BenefitCardContent, BenefitCardDescription, BenefitCardTitle, BenefitCardTime, BenefitCardPrice } from "./BenefitCardStyles";
import Button from "../../button/Button";

import { IBenefits } from "../../../../index.d";

interface BenefitCardProps {
    benefit: IBenefits;
    onClick: (value: IBenefits) => void
}

const BenefitCard = ({ benefit, onClick }: BenefitCardProps) => {
    return (
        <BenefitCardContainer onClick={() => onClick(benefit)}>
            <BenefitCardContent>
                <BenefitCardTitle>{benefit.name}</BenefitCardTitle>
                {benefit.description && <BenefitCardDescription>{benefit.description}</BenefitCardDescription>}
            </BenefitCardContent>
            <BenefitCardTime>{benefit.duration}</BenefitCardTime>
            {benefit.price && <BenefitCardPrice>{benefit.price}</BenefitCardPrice>}
            <Button onClick={() => ''} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Choisir</Button>
        </BenefitCardContainer>
    );
};

export default BenefitCard;
