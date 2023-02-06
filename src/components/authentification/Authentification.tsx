import { AuthentificationContainer, AuthentificationContent, AuthentifactionImg } from "./AuthentificationStyles"
import LoginForm from "../ui/form/login/LoginForm";
import RegisterForm from "../ui/form/register/RegisterForm";

interface AuthentificationProps {
    type: string;
}

const Authentification = ({ type }: AuthentificationProps) => {
    return (
        <AuthentificationContainer>
            <AuthentificationContent>
                { type === 'login' ? <LoginForm /> : <RegisterForm /> }
            </AuthentificationContent>
            <AuthentifactionImg src="https://source.unsplash.com/720x865/?Login" />
        </AuthentificationContainer>   
    );
}

export default Authentification;
