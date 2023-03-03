import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ForgotPasswordFormContainer, ForgotPasswordFormTitle, ForgotPasswordFormContent, ForgotPasswordFormLink, ForgotPasswordFormSeparator } from './ForgotPasswordFormStyles';
import InputText from '../../input/inputText/InputText';
import Button from '../../button/Button';

export const ForgotPasswordForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [error, setError] = useState({
        email: "",
    });

    const handleForgotPassword = () => {
        setError({
            email: "",
        });

        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === "") setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email" }));
        else if (email !== "" && !regexEmail.test(email)) setError(prevState => ({ ...prevState, email: "Merci de saisir une adresse email valide" }));
    
        if (email !== "" && regexEmail.test(email)) {
          // TODO: Forgot password
        }
    };

    return (
        <ForgotPasswordFormContainer>
            <ForgotPasswordFormTitle>Mot de passe oublié ?</ForgotPasswordFormTitle>
            <ForgotPasswordFormContent onSubmit={e => e.preventDefault()}>
                <InputText label="Email *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="email" value={email} placeholder="Email" error={error.email}  onChange={(value) => setEmail(value)} />
                <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={handleForgotPassword} >Réinitialiser mon mot de passe</Button>
                <ForgotPasswordFormLink href="/login">Retour à la connexion</ForgotPasswordFormLink>
                <ForgotPasswordFormSeparator>ou</ForgotPasswordFormSeparator>
                <ForgotPasswordFormTitle>Nouveau sur Agendly ?</ForgotPasswordFormTitle>
                <Button color="var(--grey-900)" backgroundColor="var(--white)" borderColor="var(--grey-900)" height="48px" rounded onClick={() => navigate('register', { replace: true })}>Créer un compte</Button>
            </ForgotPasswordFormContent>
        </ForgotPasswordFormContainer>
    );
};

export default ForgotPasswordForm;