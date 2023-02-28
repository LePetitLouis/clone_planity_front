import { useState } from "react";
import Button from "../../button/Button";
import InputText from "../../input/inputText/InputText";
import InputTime from "../../input/InputTime/InputTime";
import { BenefitCardTitle } from "../benefit/BenefitCardStyles";
import { BenefitFormContainer, BenefitFormContent, BenefitFormDescription, BenefitFormPrice, BenefitFormTime } from "./BenefitFormStyles";

const BenefitForm = () => {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("00:00");
  const [price, setPrice] = useState("");



  return (
    <>
      <BenefitFormContainer>
        <BenefitFormContent>
          <BenefitCardTitle>
            <InputText label="Titre préstation *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="text" value={title} placeholder="Title" onChange={(value) => setTitle(value)} />
          </BenefitCardTitle>
          <BenefitFormDescription>
            <InputText label="Description préstation *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="text" value={description} placeholder="Description" onChange={(value) => setDescription(value)} />
          </BenefitFormDescription>
        </BenefitFormContent>
        <BenefitFormContent>
          <BenefitFormTime>
            <InputTime label="Heure préstation *" value={time} onChange={(value) => setTime(value)}/>
          </BenefitFormTime>
          <BenefitFormPrice>
            <InputText label="Prix préstation *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="number" value={price} placeholder="Price" onChange={(value) => setPrice(value)} />
          </BenefitFormPrice>
        </BenefitFormContent>
      </BenefitFormContainer>
      <Button onClick={() => ''} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Ajouter</Button>
    </>
  );
};

export default BenefitForm;