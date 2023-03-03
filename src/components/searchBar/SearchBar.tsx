import { useNavigate } from "react-router-dom"

import { SearchBarContainer, SearchBarSeparator } from "./SearchBarStyles"
import Input from "../ui/input/Input"
import Button from "../ui/button/Button"
import { AddressAutofill } from "@mapbox/search-js-react"

import { useAppSelector, useAppDispatch } from "../../store/hook"
import { selectSearch, setCategory, setPlace } from "../../store/slice/searchSlice"

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const search = useAppSelector(selectSearch)

    const suggestions = ["Coiffeurs", "Barbiers", "Manucure", "Instituts de beauté", "Tatoueurs"]

    const handleResult = () => {
        console.log('search', search)
        const regexAddress = new RegExp(/\d{1,3}(([,.]?\s){1}\w+)*/)
        console.log('regexAddress', regexAddress.test(search.place))
        console.log('suggestions', suggestions.includes(search.category))
        if (suggestions.includes(search.category) && regexAddress.test(search.place)) {
            console.log('navigate')
            // navigate('/result')
        } 
    }

    return (
        <SearchBarContainer>
            <Input label="Que cherchez-vous ?" type="text" value={search.category} placeholder="Nom du salon, prestation (coupe...)" suggestions={suggestions} onChange={(value) => dispatch(setCategory(value))} />
            <SearchBarSeparator />
            <div style={{ width: '100%'}}>
            <AddressAutofill accessToken={process.env.REACT_APP_API_KEY_MAPBOX || ""} popoverOptions={{ offset: 35 }}>
                <Input label="Où" type="text" value={search.place} placeholder="Adresse, ville..." onChange={(value) => dispatch(setPlace(value))} />
            </AddressAutofill>
            </div>
            <Button onClick={handleResult} rounded color="var(--white)" backgroundColor="var(--grey-900)" height="48px">Rechercher</Button>
        </SearchBarContainer>
    )
}

export default SearchBar
