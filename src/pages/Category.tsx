import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { HeaderCategory } from "../components/headerCategory/HeaderCategory"
import ListCity from "../components/listCity/ListCity"

const Category = () => {
    const location = useLocation()
    const name = location.pathname.slice(1)

    const cities = ["Paris", "Lyon", "Marseille", "Bordeaux"]

    useEffect(() => {
        document.title = `Agendly - ${name}`
    }, [name])

    return (
        <>
            <HeaderCategory category={name} />
            <ListCity cities={cities} category={name} />
        </>
    )
}

export default Category