import { useState } from "react";

import { LoginFormContainer, LoginFormTitle, LoginFormContent, LoginFormSeparator, LoginFormLink, LoginFormError } from "./LoginFormStyles";
import InputText from "../../input/inputText/InputText";
import Button from "../../button/Button";

import { useNavigate } from "react-router-dom";

import { API } from "../../../../services/index";
import { useAppDispatch } from "../../../../store/hook";
import { login } from "../../../../store/slice/authSlice";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const [errorLogin, setErrorLogin] = useState("");

    const handleLogin = async () => {
        setErrorLogin("");
        setError({
            email: "",
            password: "",
        });

        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === "") setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email" }));
        else if (email !== "" && !regexEmail.test(email)) setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email valide" }));

        if (password === "") setError(prevState => ({ ...prevState, password: "Merci de saisir un mot de passe" }));

        if (email !== "" && regexEmail.test(email) && password !== "") {
            const data = await API.auth.login(email, password);
            if (data) {
                dispatch(login(data));
                navigate('/my-account', { replace: true });
            } else {
                setErrorLogin("L'adresse email ou le mot de passe est incorrect");
            }
        }
    };

    return (
        <LoginFormContainer>
            <LoginFormTitle>Vous avez déjà utilisé Agendly ?</LoginFormTitle>
            {errorLogin && <LoginFormError>{errorLogin}</LoginFormError>}
            <LoginFormContent onSubmit={e => e.preventDefault()}>
                <InputText label="Email *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="email" value={email} placeholder="Email" error={error.email} onChange={(value) => setEmail(value)} />
                <InputText label="Mot de passe *" border="var(--grey-500)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" type="password" value={password} placeholder="Mot de passe" error={error.password} onChange={(value) => setPassword(value)} />
                <LoginFormLink href="/forgot-password">Mot de passe oublié ?</LoginFormLink>
                <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={handleLogin}>Se connecter</Button>
                <LoginFormSeparator>ou</LoginFormSeparator>
                <LoginFormTitle>Nouveau sur Agendly ?</LoginFormTitle>
                <Button color="var(--grey-900)" backgroundColor="var(--white)" borderColor="var(--grey-900)" height="48px" rounded onClick={() => navigate('/register', { replace: true })}>Créer un compte</Button>
            </LoginFormContent>
        </LoginFormContainer>
    );
};

export default LoginForm;
