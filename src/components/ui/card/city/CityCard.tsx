import { CityCardContainer, CityCardTitle, CityCardImage, CityCardDescription, CityCardInfo } from './CityCardStyles';

interface CityCardProps {
    city: string;
    image: string;
    title: string;
    description: string;
    onClick: (value: string) => void;
}

const CityCard = ({ city, image, title, description, onClick }: CityCardProps) => {
    return (
        <CityCardContainer onClick={() => onClick(city)}>
            <CityCardImage src={image} />
            <CityCardInfo>
                <CityCardTitle>{title}</CityCardTitle>
                <CityCardDescription>{description}</CityCardDescription>
            </CityCardInfo>
        </CityCardContainer>
    );
};

export default CityCard;
