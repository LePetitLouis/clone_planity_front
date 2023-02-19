import { BenefitCardContainer, BenefitCardContent, BenefitCardDescription, BenefitCardTitle, BenefitCardTime, BenefitCardPrice } from "./BenefitCardStyles";
import Button from "../../button/Button";

import { IBenefit } from "../../../../index.d";

interface BenefitCardProps {
    benefit: IBenefit;
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
    return (
        <BenefitCardContainer>
            <BenefitCardContent>
                <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                {benefit.description && <BenefitCardDescription>{benefit.description}</BenefitCardDescription>}
            </BenefitCardContent>
            <BenefitCardTime>{benefit.time}</BenefitCardTime>
            {benefit.price && <BenefitCardPrice>{benefit.price}</BenefitCardPrice>}
            <Button onClick={() => console.log('Choisir')} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Choisir</Button>
        </BenefitCardContainer>
    );
};

export default BenefitCard;
