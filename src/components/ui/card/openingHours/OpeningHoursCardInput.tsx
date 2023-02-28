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
  const [checkboxValue, setCheckboxValue] = useState();

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

  const itemsHours = [
    {
      name: weekday[day],
      label: "Ouvert"
    }
  ]


  return (
    <OpeningHoursCardFormContainer>
      <OpeningHoursCardDay strong={isToday}>{weekday[day]}</OpeningHoursCardDay>
      {checkboxValue ? <InputTime value={time} onChange={(value) => setTime(value)} /> : '-'}
      <InputCheckbox items={itemsHours} onChange={(value) => setCheckboxValue(value)} />
    </OpeningHoursCardFormContainer>
  );
};

export default OpeningHoursCardInput;