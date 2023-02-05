import { HeaderCategoryContainer, HeaderCategoryTitle } from "./HeaderCategoryStyles";
import SearchBar from "../searchBar/SearchBar";

interface HeaderCategoryProps {
    category: string;
}

export const HeaderCategory = ({ category }: HeaderCategoryProps) => {
    return (
        <HeaderCategoryContainer>
            <HeaderCategoryTitle>Réserver en ligne un RDV avec un {category}</HeaderCategoryTitle>
            <SearchBar />
        </HeaderCategoryContainer>
    );
};