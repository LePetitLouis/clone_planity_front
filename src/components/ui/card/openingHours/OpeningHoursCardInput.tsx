import { useState } from "react";
import InputCheckbox from "../../input/inputCheckbox/InputCheckbox";
import { OpeningHoursCardDay, OpeningHoursCardFormContainer, OpeningHoursCardInfo } from "./OpeningHoursCardStyles";

interface OpeningHoursCardInputProps{
  day: number
  opening: string
  closing: string
}

const OpeningHoursCardInput = ({ day, opening, closing }: OpeningHoursCardInputProps) => {

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
      <input className="time" type="time" name="time" value="00:00" />
      <OpeningHoursCardInfo>(ne pas renseignez les horaires si fermer)</OpeningHoursCardInfo>
    </OpeningHoursCardFormContainer>
  );
};

export default OpeningHoursCardInput;