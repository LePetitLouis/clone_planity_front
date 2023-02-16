import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/hook";

import CityCard from "../../card/city/CityCard";
import { ListCityContainer } from "./ListCityStyles";

import { setPlace } from "../../../../store/searchSlice";

interface ListCityProps {
    cities: string[];
    category: string;
}

const ListCity = ({ cities, category }: ListCityProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleSelectedCity = (city: string) => {
        dispatch(setPlace(city))
        navigate('/result', { replace: true })
    }

    return (
        <ListCityContainer>
            {cities.map((city) => (
                <CityCard
                    key={city}
                    city={city}
                    image={`https://source.unsplash.com/1600x900/?${city}`}
                    title="Découvrez nos"
                    description={`${capitalizeFirstLetter(category)} à ${city}`}
                    onClick={(value) => handleSelectedCity(value)}
                />
            ))}
        </ListCityContainer>
    );
};

export default ListCity;