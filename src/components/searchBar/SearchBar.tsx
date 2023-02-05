import { useState } from "react"

import { SearchBarContainer, SearchBarSeparator } from "./SearchBarStyles"
import Input from "../ui/input/Input"
import Button from "../ui/button/Button"

const SearchBar = () => {
    // TODO: create store search in redux
    const [shop, setShop] = useState<string>('')
    const [city, setCity] = useState<string>('')
    return (
        <SearchBarContainer>
            <Input label="Que cherchez-vous ?" type="text" value={shop} placeholder="Nom du salon, prestation (coupe...)" onChange={(value) => setShop(value)} />
            <SearchBarSeparator />
            <Input label="Où" type="text" value={city} placeholder="Adresse, ville..." onChange={(value) => setCity(value)} />
            <Button onClick={() => console.log('search')} rounded color="var(--white)" backgroundColor="var(--grey-900)" height="48px">Rechercher</Button>
        </SearchBarContainer>
    )
}

export default SearchBar
