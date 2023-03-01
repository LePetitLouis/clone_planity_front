import { useEffect, useReducer, useState } from "react";
import InputCheckbox from "../../input/inputCheckbox/InputCheckbox";
import InputTime from "../../input/InputTime/InputTime";
import { OpeningHoursCardDay, OpeningHoursCardFormContainer, OpeningHoursCardInfo } from "./OpeningHoursCardStyles";

interface OpeningHoursCardInputProps{
  day: number
  opening: string
  closing: string
}

interface OpenTradeProps{
  types: string
  value: boolean
}

interface typeOfTradeProps{
  types: OpenTradeProps[]
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

  const initialtypeOfTrade: typeOfTradeProps = {
    types: []
  };
  
  const [typeOfTrade, settypeOfTrade] = useReducer((state: typeOfTradeProps, newState: typeOfTradeProps) => ({ ...state, ...newState }), initialtypeOfTrade);
  
  const [oldArray, setOldArray] = useState<any[] | [typeOfTradeProps]>([undefined])

  const getTypeTrader = (value:any) => {
    setOldArray((oldArray) => [...oldArray, value]);
  }

  const filterArray = (item:any) => {
    if(item == undefined){
      oldArray.splice(0, 1);
    }
  }

  const filterArrayFalse = (item:any) => {
    if(Object.keys(oldArray).length >= 1 && item != undefined) {
      const itemsIndexesFalse = oldArray.flatMap((obj, i) => obj.types.do == false ? i : []);
      itemsIndexesFalse.map((index) =>
        oldArray.splice(index, 1)
      )
    }
  }

  const checkValueArray = (value:any) => {
    oldArray.filter(filterArray);
    if(oldArray.find(obj => obj != undefined)){

      const itemsIndexes = oldArray.flatMap((obj, i) => obj.types.types === value.types.types ? i : []);

      itemsIndexes.map((index) =>
        oldArray.splice(index, 1)
      )
        
    }
  }

  
  const handleOnChange = (value:any) => {
    settypeOfTrade({...typeOfTrade, types: value })
    getTypeTrader(value);
    checkValueArray(value);
  }
  
  useEffect(() => {
    oldArray.filter(filterArrayFalse);
    console.log(oldArray)
  })


  return (
    <OpeningHoursCardFormContainer>
      <OpeningHoursCardDay strong={isToday}>{weekday[day]}</OpeningHoursCardDay>
      {checkboxValue ? <InputTime value={time} onChange={(value) => setTime(value)} /> : '-'}
      <InputCheckbox items={itemsHours} typeCheckbox='open_hours' onChange={(value) => handleOnChange({...typeOfTrade, types: value})} />
    </OpeningHoursCardFormContainer>
  );
};

export default OpeningHoursCardInput;