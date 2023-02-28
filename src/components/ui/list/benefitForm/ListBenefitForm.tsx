import { useReducer, useState } from "react";
import BenefitForm from "../../card/benefitForm/BenefitForm";
import InputCheckbox from "../../input/inputCheckbox/InputCheckbox";
import { ListBenefitFormContainer, ListBenefitFormSubTitle, ListBenefitFormTitle } from "./ListBenefitFormStyles";

interface ListBenefitFormProps{
  title: string;
  description: string;
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

const ListBenefitForm = ({title, description}: ListBenefitFormProps) => {

  const initialTypeOfPrestation: typeOfPrestationProps = {
    types: []
  };
  
  const [typeOfPrestation, setTypeOfPrestation] = useReducer((state: typeOfPrestationProps, newState: typeOfPrestationProps) => ({ ...state, ...newState }), initialTypeOfPrestation);

  return (
    <ListBenefitFormContainer>
      <ListBenefitFormTitle>{title}
        {description && <ListBenefitFormSubTitle>{description}</ListBenefitFormSubTitle>}
      </ListBenefitFormTitle>
      <InputCheckbox items={items} typeCheckbox='prestation' onChange={(value) => setTypeOfPrestation({...typeOfPrestation, types: value })}/>
      <BenefitForm />
    </ListBenefitFormContainer>
  );
};

export default ListBenefitForm;