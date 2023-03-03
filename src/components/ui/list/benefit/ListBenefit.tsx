import { ListBenefitContainer } from "./ListBenefitStyles";
import BenefitCard from "../../card/benefit/BenefitCard";

import { IBenefits } from "../../../../index.d";
import { useAppDispatch } from "../../../../store/hook";
import { setBenefit } from "../../../../store/slice/bookingSlice";
import { useNavigate } from "react-router-dom";

interface ListBenefitProps {
    benefits: IBenefits[]
}

const ListBenefit = ({ benefits }: ListBenefitProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSelectedBenefit = (benefit: IBenefits) => {
        dispatch(setBenefit(benefit))
        navigate('/booking', { replace: true })
    }

    return (
        <>
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