import { useEffect, useReducer, useState } from "react";
import BenefitForm from "../../card/benefitForm/BenefitForm";
import InputCheckbox from "../../input/inputCheckbox/InputCheckbox";
import { ListBenefitFormContainer, ListBenefitFormSubTitle, ListBenefitFormTitle } from "./ListBenefitFormStyles";

interface ListBenefitFormProps{
  title: string;
}

interface ITypeTraderPrestation{
  type: string;
  value: boolean;
}

interface typeOfPrestationProps{
  types: ITypeTraderPrestation[];
}

const items=[
  {
    name: "Enfant"
  },
  {
    name: "Femme"
  },
  {
    name: "Homme"
  }
];

const ListBenefitForm = ({title}: ListBenefitFormProps) => {

  
  const initialTypeOfPrestation: typeOfPrestationProps = {
    types: []
  };
  
  const [typeOfPrestation, setTypeOfPrestation] = useReducer((state: typeOfPrestationProps, newState: typeOfPrestationProps) => ({ ...state, ...newState }), initialTypeOfPrestation);
  
  const [oldArray, setOldArray] = useState<any[] | [typeOfPrestationProps]>([undefined])

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

  useEffect(() => {
    oldArray.filter(filterArrayFalse);
  })

  const handleOnChange = (value:any) => {
    setTypeOfPrestation({...typeOfPrestation, types: value })
    getTypeTrader(value);
    checkValueArray(value);
  }

  return (
    <ListBenefitFormContainer>
      <ListBenefitFormTitle>{title}</ListBenefitFormTitle>
      <InputCheckbox items={items} typeCheckbox='prestation' onChange={(value) => handleOnChange({...typeOfPrestation, types: value })}/>
      <BenefitForm />
    </ListBenefitFormContainer>
  );
};

export default ListBenefitForm;