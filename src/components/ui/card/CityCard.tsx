import { CityCardContainer, CityCardTitle, CityCardImage, CityCardDescription, CityCardInfo } from './CityCardStyles';

interface CityCardProps {
    image: string;
    title: string;
    description: string;
    onClick: () => void;
}

const CityCard = ({ image, title, description, onClick }: CityCardProps) => {
    return (
        <CityCardContainer onClick={() => onClick}>
            <CityCardImage src={image} />
            <CityCardInfo>
                <CityCardTitle>{title}</CityCardTitle>
                <CityCardDescription>{description}</CityCardDescription>
            </CityCardInfo>
        </CityCardContainer>
    );
};

export default CityCard;
