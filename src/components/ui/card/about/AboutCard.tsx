import { AboutContainer, AboutHeader } from "./AboutCardStyles";

interface AboutCardProps {
    about: string
}

export const AboutCard = ({ about }: AboutCardProps) => {
    return (
        <>
            <AboutHeader>À propos</AboutHeader>
            <AboutContainer>{about}</AboutContainer>
        </>
    );
};

export default AboutCard;