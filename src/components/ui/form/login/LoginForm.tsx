import { useState } from "react";

import { LoginFormContainer, LoginFormTitle, LoginFormContent, LoginFormSeparator, LoginFormLink } from "./LoginFormStyles";
import InputText from "../../input/inputText/InputText";
import Button from "../../button/Button";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginFormContainer>
            <LoginFormTitle>Vous avez déjà utilisé Planity ?</LoginFormTitle>
            <LoginFormContent>
                <InputText label="Email *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="email" value={email} placeholder="Email" onChange={(value) => setEmail(value)} />
                <InputText label="Mot de passe *" border="var(--grey-500)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" type="password" value={password} placeholder="Mot de passe" onChange={(value) => setPassword(value)} />
                <LoginFormLink href="/forgot-password">Mot de passe oublié ?</LoginFormLink>
                <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={() => console.log('login')}>Se connecter</Button>
                <LoginFormSeparator>ou</LoginFormSeparator>
                <LoginFormTitle>Nouveau sur Planity ?</LoginFormTitle>
                <Button color="var(--grey-900)" backgroundColor="var(--white)" borderColor="var(--grey-900)" height="48px" rounded onClick={() => navigate('/register', { replace: true })}>Créer un compte</Button>
            </LoginFormContent>
        </LoginFormContainer>
    );
};

export default LoginForm;
