import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterFormContainer, RegisterFormTitle, RegisterFormContent, RegisterFormSeparator } from "./RegisterFormStyles";
import InputText from "../../input/inputText/InputText";
import InputPhone from "../../input/inputPhone/InputPhone";
import { isValidPhoneNumber } from "react-phone-number-input";
import Button from "../../button/Button";

import { API } from "../../../../services/index";
import { useAppDispatch } from "../../../../store/hook";
import { login } from "../../../../store/slice/authSlice";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentStep, setCurrentStep] = useState(1);

  const [phone, setPhone] = useState<any>('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [error, setError] = useState({
    phone: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleRegister = async () => {
    setError({
      phone: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });

    if (firstName === "") setError(prevState => ({ ...prevState, firstName: "Merci de saisir un prénom" }));
    if (lastName === "") setError(prevState => ({ ...prevState, lastName: "Merci de saisir un nom" }));

    if (firstName !== "" && lastName !== "") {
      const data = await API.auth.register(firstName, lastName, phone, email, password, 'role')
      if (data) {
        dispatch(login(data));
        navigate('/my-account', { replace: true });
      } else {
        alert('Erreur lors de l\'inscription');
      }
    }
  };

  const handleNextStep = () => {
    setError({
      phone: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (phone === "") setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone" }));
    if (email === "") setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email" }));
    else if (email !== "" && !regexEmail.test(email)) setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email valide" }));

    if (password === "") setError(prevState => ({ ...prevState, password: "Merci de saisir un mot de passe" }));

    if (phone === "") setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone" }));
    else if (phone !== "" && !!isValidPhoneNumber(phone)) setError(prevState => ({ ...prevState, phone: "Merci de saisir un numéro de téléphone valide" }));

    if (phone !== "" && email !== "" && password !== "" && regexEmail.test(email) && isValidPhoneNumber(phone)) {
      setCurrentStep(2);
    }
  };


  return (
    <RegisterFormContainer>
      {currentStep === 1 && (
        <>
          <RegisterFormTitle>Nouveau sur Agendly ?</RegisterFormTitle>
          <RegisterFormContent onSubmit={e => e.preventDefault()}>
            <InputPhone placeholder="Téléphone portable" label="Téléphone portable *" defaultCountry="FR" value={phone} error={error.phone} onChange={(value) => setPhone(value)} />
            <InputText label="Email *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="email" value={email} placeholder="Email" error={error.email} onChange={(value) => setEmail(value)} />
            <InputText label="Mot de passe *" border="var(--grey-500)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" type="password" value={password} placeholder="Mot de passe" error={error.password} onChange={(value) => setPassword(value)} />
            <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={handleNextStep}>Créer un compte</Button>
            <RegisterFormSeparator>ou</RegisterFormSeparator>
            <RegisterFormTitle>Vous avez déjà utilisé Agendly ?</RegisterFormTitle>
            <Button color="var(--grey-900)" backgroundColor="var(--white)" borderColor="var(--grey-900)" height="48px" rounded onClick={() => navigate('/login', { replace: true })}>Se connecter</Button>
          </RegisterFormContent>
        </>
      )}
      {currentStep === 2 && (
        <>
          <RegisterFormTitle>Finaliser votre inscription</RegisterFormTitle>
          <RegisterFormContent onSubmit={e => e.preventDefault()}>
            <InputText label="Nom *" border="var(--grey-500)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" value={lastName} type="text" placeholder="Nom" error={error.lastName} onChange={(value) => setLastName(value)} />
            <InputText label="Prénom *" border="var(--grey-500)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" value={firstName} type="text" placeholder="Prénom" error={error.firstName} onChange={(value) => setFirstName(value)} />
            <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={handleRegister}>Créer un compte</Button>
          </RegisterFormContent>
        </>
      )}
    </RegisterFormContainer>
  );
};

export default RegisterForm;