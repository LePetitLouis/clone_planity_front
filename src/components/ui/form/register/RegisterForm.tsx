import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterFormContainer, RegisterFormTitle, RegisterFormContent, RegisterFormSeparator } from "./RegisterFormStyles";
import InputText from "../../input/inputText/InputText";
import InputPhone from "../../input/inputPhone/InputPhone";
import { isValidPhoneNumber, formatPhoneNumber } from "react-phone-number-input";
import Button from "../../button/Button";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState<any>('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (phone === "") setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone" }));
    if (email === "") setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email" }));
    else if (email !== "" && !regexEmail.test(email)) setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email valide" }));

    if (password === "") setError(prevState => ({ ...prevState, password: "Merci de saisir un mot de passe" }));

    // console.log(formatPhoneNumber(phone))
    if (phone === "") setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone" }));
    else if (phone !== "" && !!isValidPhoneNumber(phone)) setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone valide" }));

    if (!isValidPhoneNumber(phone) && email !== "" && regexEmail.test(email) && password !== "") {
      // TODO: Register
    }
  };

  return (
    <RegisterFormContainer>
      <RegisterFormTitle>Nouveau sur Planity ?</RegisterFormTitle>
      <RegisterFormContent onSubmit={e => e.preventDefault()}>
        <InputPhone placeholder="Téléphone portable" label="Téléphone portable *" defaultCountry="FR" value={phone} error={error.phone} onChange={(value) => setPhone(value)} />
        <InputText label="Email *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="email" value={email} placeholder="Email" error={error.email} onChange={(value) => setEmail(value)} />
        <InputText label="Mot de passe *" border="var(--grey-500)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" type="password" value={password} placeholder="Mot de passe" error={error.password} onChange={(value) => setPassword(value)} />
        <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={handleRegister}>Créer un compte</Button>
        <RegisterFormSeparator>ou</RegisterFormSeparator>
        <RegisterFormTitle>Vous avez déjà utilisé Planity ?</RegisterFormTitle>
        <Button color="var(--grey-900)" backgroundColor="var(--white)" borderColor="var(--grey-900)" height="48px" rounded onClick={() => navigate('/login', { replace: true })}>Se connecter</Button>
      </RegisterFormContent>
    </RegisterFormContainer>
  );
};

export default RegisterForm;