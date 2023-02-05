import { SearchBarContainer, SearchBarSeparator } from "./SearchBarStyles"
import Input from "../ui/input/Input"
import Button from "../ui/button/Button"

import { useAppSelector, useAppDispatch } from "../../store/hook"
import { selectSearch, setCategory, setPlace } from "../../store/searchSlice"

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector(selectSearch)

    return (
        <SearchBarContainer>
            <Input label="Que cherchez-vous ?" type="text" value={search.category} placeholder="Nom du salon, prestation (coupe...)" onChange={(value) => dispatch(setCategory(value))} />
            <SearchBarSeparator />
            <Input label="Où" type="text" value={search.place} placeholder="Adresse, ville..." onChange={(value) => dispatch(setPlace(value))} />
            <Button onClick={() => console.log('search')} rounded color="var(--white)" backgroundColor="var(--grey-900)" height="48px">Rechercher</Button>
        </SearchBarContainer>
    )
}

export default SearchBar
