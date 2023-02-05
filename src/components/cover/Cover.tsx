import { CoverContainer, CoverTitle, CoverSubtitle } from "./CoverStyles";
import SearchBar from "../searchBar/SearchBar";

const Cover = () => {
    return (
        <CoverContainer>
            <CoverTitle>Vos rendez-vous beauté en ligne</CoverTitle>
            <CoverSubtitle>Simple • Immédiat • 24h/24</CoverSubtitle>
            <SearchBar />
        </CoverContainer>
    );
};

export default Cover;