
import { IOpeningHours } from "../../../../../index.d";
import OpeningHoursCard from "../../../card/openingHours/OpeningHoursCard";
import OpeningHoursCardInput from "../../../card/openingHours/OpeningHoursCardInput";
import { ListOpenningHoursContainer, ListOpenningHoursHeader } from "../ListOpeningHoursStyles";
import { ListOpeningHoursFormContainer } from "./ListOpeningHoursFormStyles";


interface ListOpeningHoursFormProps {
    openingHours: IOpeningHours[]
}

export const ListOpeningHoursForm = ({ openingHours }: ListOpeningHoursFormProps) => {
    return (
        <ListOpeningHoursFormContainer>
            <ListOpenningHoursHeader>Horaires d'ouverture</ListOpenningHoursHeader>
            <ListOpenningHoursContainer>
                {openingHours.map((openingHour, index) => (
                    <OpeningHoursCardInput
                        key={index}
                        day={openingHour.day}
                        opening={openingHour.open}
                        closing={openingHour.close}
                    />
                ))}
            </ListOpenningHoursContainer>
        </ListOpeningHoursFormContainer>
    );
};

export default ListOpeningHoursForm;