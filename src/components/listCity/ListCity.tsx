import CityCard from "../ui/card/CityCard";
import { ListCityContainer } from "./ListCityStyles";

interface ListCityProps {
    cities: string[];
    category: string;
}

const ListCity = ({ cities, category }: ListCityProps) => {

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <ListCityContainer>
            {cities.map((city) => (
                <CityCard
                    key={city}
                    image={`https://source.unsplash.com/1600x900/?${city}`}
                    title="Découvrez nos"
                    description={`${capitalizeFirstLetter(category)} à ${city}`}
                    onClick={() => console.log(city)}
                />
            ))}
        </ListCityContainer>
    );
};

export default ListCity;