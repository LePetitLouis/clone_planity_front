import { useNavigate } from "react-router-dom"

import { SearchBarContainer, SearchBarSeparator } from "./SearchBarStyles"
import Input from "../ui/input/Input"
import Button from "../ui/button/Button"

import { useAppSelector, useAppDispatch } from "../../store/hook"
import { selectSearch, setCategory, setPlace } from "../../store/searchSlice"

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const search = useAppSelector(selectSearch)

    const suggestions = ["Coiffeurs", "Barbiers", "Manucure", "Instituts de beauté", "Tatoueurs"]

    const handleResult = () => {
        console.log('search', search)
        if (search.category === '' && search.place === '') {
            return
        }
        navigate('/result')
    }

    return (
        <SearchBarContainer>
            <Input label="Que cherchez-vous ?" type="text" value={search.category} placeholder="Nom du salon, prestation (coupe...)" suggestions={suggestions} onChange={(value) => dispatch(setCategory(value))} />
            <SearchBarSeparator />
            <Input label="Où" type="text" value={search.place} placeholder="Adresse, ville..." onChange={(value) => dispatch(setPlace(value))} />
            <Button onClick={handleResult} rounded color="var(--white)" backgroundColor="var(--grey-900)" height="48px">Rechercher</Button>
        </SearchBarContainer>
    )
}

export default SearchBar
