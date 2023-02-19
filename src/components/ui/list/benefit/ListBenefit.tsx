import { ListBenefitContainer, ListBenefitTitle, ListBenefitSubTitle } from "./ListBenefitStyles";
import BenefitCard from "../../card/benefit/BenefitCard";

import { IBenefit } from "../../../../index.d";

interface ListBenefitProps {
    title: string
    description?: string
    benefits: IBenefit[]
}

const ListBenefit = ({ title, description, benefits }: ListBenefitProps) => {
    return (
        <>
            <ListBenefitTitle>{title}
            {description && <ListBenefitSubTitle>{description}</ListBenefitSubTitle>}
            </ListBenefitTitle>
            <ListBenefitContainer>
                {benefits.map((benefit, index) => (
                    <BenefitCard
                        key={index}
                        benefit={benefit}
                    />
                ))}
            </ListBenefitContainer>
        </>
    );
};

export default ListBenefit;