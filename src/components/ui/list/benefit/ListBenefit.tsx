import { ListBenefitContainer, ListBenefitTitle, ListBenefitSubTitle } from "./ListBenefitStyles";
import BenefitCard from "../../card/benefit/BenefitCard";

import { IBenefit } from "../../../../index.d";
import { useAppDispatch } from "../../../../store/hook";
import { setBenefit } from "../../../../store/slice/bookingSlice";
import { useNavigate } from "react-router-dom";

interface ListBenefitProps {
    title: string
    description?: string
    benefits: IBenefit[]
}

const ListBenefit = ({ title, description, benefits }: ListBenefitProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSelectedBenefit = (benefit: IBenefit) => {
        dispatch(setBenefit(benefit))
        navigate('/booking', { replace: true })
    }

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
                        onClick={(benefit) => handleSelectedBenefit(benefit)}
                    />
                ))}
            </ListBenefitContainer>
        </>
    );
};

export default ListBenefit;