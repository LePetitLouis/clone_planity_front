import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ForgotPasswordFormContainer, ForgotPasswordFormTitle, ForgotPasswordFormContent, ForgotPasswordFormLink, ForgotPasswordFormSeparator } from './ForgotPasswordFormStyles';
import InputText from '../../input/inputText/InputText';
import Button from '../../button/Button';

export const ForgotPasswordForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    return (
        <ForgotPasswordFormContainer>
            <ForgotPasswordFormTitle>Mot de passe oublié ?</ForgotPasswordFormTitle>
            <ForgotPasswordFormContent>
                <InputText label="Email *" border="var(--grey-500)" rounded backgroundInputColor="var(--white)" colorLabel="var(--grey-900)" type="email" value={email} placeholder="Email" onChange={(value) => setEmail(value)} />
                <Button color="var(--white)" backgroundColor="var(--grey-900)" height="48px" rounded onClick={() => console.log('forgot password')}>Réinitialiser mon mot de passe</Button>
                <ForgotPasswordFormLink href="/login">Retour à la connexion</ForgotPasswordFormLink>
                <ForgotPasswordFormSeparator>ou</ForgotPasswordFormSeparator>
                <ForgotPasswordFormTitle>Nouveau sur Planity ?</ForgotPasswordFormTitle>
                <Button color="var(--grey-900)" backgroundColor="var(--white)" borderColor="var(--grey-900)" height="48px" rounded onClick={() => navigate('register', { replace: true })}>Créer un compte</Button>
            </ForgotPasswordFormContent>
        </ForgotPasswordFormContainer>
    );
};

export default ForgotPasswordForm;