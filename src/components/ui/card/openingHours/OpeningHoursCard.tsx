import { OpeningHoursCardContainer, OpeningHoursCardDay, OpeningHoursCardTime } from "./OpeningHoursCardStyles";

interface OpeningHoursCardProps {
    day: number
    opening: string
    closing: string
}

const OpeningHoursCard = ({ day, opening, closing }: OpeningHoursCardProps) => {
    const weekday = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
    ]

    const isToday = new Date().getDay() === day;

    return (
        <OpeningHoursCardContainer>
            <OpeningHoursCardDay strong={isToday}>{weekday[day]}</OpeningHoursCardDay>
            <OpeningHoursCardTime strong={isToday}>{opening} - {closing}</OpeningHoursCardTime>
        </OpeningHoursCardContainer>
    );
};

export default OpeningHoursCard;