import BenefitForm from "../../card/benefitForm/BenefitForm";
import { ListBenefitFormContainer, ListBenefitFormSubTitle, ListBenefitFormTitle } from "./ListBenefitFormStyles";

interface ListBenefitFormProps{
  title: string;
  description: string;
}

const ListBenefitForm = ({title, description}: ListBenefitFormProps) => {
  return (
    <ListBenefitFormContainer>
      <ListBenefitFormTitle>{title}
        {description && <ListBenefitFormSubTitle>{description}</ListBenefitFormSubTitle>}
      </ListBenefitFormTitle>
      <BenefitForm />
    </ListBenefitFormContainer>
  );
};

export default ListBenefitForm;