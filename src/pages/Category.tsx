import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { HeaderCategory } from "../components/headerCategory/HeaderCategory"
import ListCity from "../components/ui/list/city/ListCity"

import { useAppDispatch } from "../store/hook"
import { setCategory, resetSearch } from "../store/searchSlice"

const Category = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const name = location.pathname.slice(1) === "institut-beaute" ? "institut de beauté" : location.pathname.slice(1)

    const cities = ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Montpellier"]

    useEffect(() => {
        dispatch(resetSearch())
        document.title = `Agendly - ${name}`
        dispatch(setCategory(name.charAt(0).toUpperCase() + name.slice(1)))
    }, [name, dispatch])

    return (
        <>
            <HeaderCategory category={name} />
            <ListCity cities={cities} category={name} />
        </>
    )
}

export default Category