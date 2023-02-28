import { useState } from "react";
import InputCheckbox from "../../input/inputCheckbox/InputCheckbox";
import InputTime from "../../input/InputTime/InputTime";
import { OpeningHoursCardDay, OpeningHoursCardFormContainer, OpeningHoursCardInfo } from "./OpeningHoursCardStyles";

interface OpeningHoursCardInputProps{
  day: number
  opening: string
  closing: string
}

const OpeningHoursCardInput = ({ day, opening, closing }: OpeningHoursCardInputProps) => {

  const [time, setTime] = useState("00:00")

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
    <OpeningHoursCardFormContainer>
      <OpeningHoursCardDay strong={isToday}>{weekday[day]}</OpeningHoursCardDay>
      <InputTime value={time} onChange={(value) => setTime(value)} />
      <OpeningHoursCardInfo>(ne pas renseignez les horaires si fermer)</OpeningHoursCardInfo>
    </OpeningHoursCardFormContainer>
  );
};

export default OpeningHoursCardInput;