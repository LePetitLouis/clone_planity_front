import { useEffect } from "react";
import Cover from "../components/cover/Cover";

import { useAppDispatch } from "../store/hook";
import { resetSearch } from "../store/slice/searchSlice";

const Home = () => {
    const dispatch = useAppDispatch()

    dispatch(resetSearch())

    useEffect(() => {
        document.title = "Agendly"
    }, [])

    return (
        <>
            <Cover />
        </>
    );
};

export default Home;