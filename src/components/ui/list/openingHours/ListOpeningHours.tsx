import { ListOpenningHoursContainer, ListOpenningHoursHeader } from "./ListOpeningHoursStyles";
import OpeningHoursCard from "../../card/openingHours/OpeningHoursCard";

import { IOpeningHours } from "../../../../index.d";

interface ListOpeningHoursProps {
    openingHours: IOpeningHours[]
}

export const ListOpeningHours = ({ openingHours }: ListOpeningHoursProps) => {
    return (
        <>
            <ListOpenningHoursHeader>Horaires d'ouverture</ListOpenningHoursHeader>
            <ListOpenningHoursContainer>
                {openingHours.map((openingHour, index) => (
                    <OpeningHoursCard
                        key={index}
                        day={openingHour.day}
                        opening={openingHour.opening}
                        closing={openingHour.closing}
                    />
                ))}
            </ListOpenningHoursContainer>
        </>
    );
};

export default ListOpeningHours;