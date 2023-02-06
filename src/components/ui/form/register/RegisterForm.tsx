import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterFormContainer, RegisterFormTitle, RegisterFormContent, RegisterFormSeparator } from "./RegisterFormStyles";
import InputText from "../../input/inputText/InputText";
import Button from "../../button/Button";


export const RegisterForm = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RegisterFormContainer>
      <RegisterFormTitle>Nouveau sur Planity ?</RegisterFormTitle>
      <RegisterFormContent>
        <InputText label="Téléphone portable *" value={phone} colorLabel="var(--grey-900)" type="text" placeholder="Telephone portable" onChange={(value) => setPhone(value)} />
        <InputText label="Email *" value={email} colorLabel="var(--grey-900)" type="email" placeholder="Email" onChange={(value) => setEmail(value)} />
        <InputText label="Mot de passe *" value={password} colorLabel="var(--grey-900)" type="password" placeholder="Mot de passe" onChange={(value) => setPassword(value)} />
        <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={() => console.log('register')}>Créer un compte</Button>
        <RegisterFormSeparator>ou</RegisterFormSeparator>
        <RegisterFormTitle>Vous avez déjà utilisé Planity ?</RegisterFormTitle>
        <Button color="var(--grey-900)" backgroundColor="var(--white)" borderColor="var(--grey-900)" height="48px" rounded onClick={() => navigate('/login', { replace: true })}>Se connecter</Button>
      </RegisterFormContent>
    </RegisterFormContainer>
  );
};

export default RegisterForm;