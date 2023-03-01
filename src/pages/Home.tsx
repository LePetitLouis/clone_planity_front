import { useEffect } from "react";
import Cover from "../components/cover/Cover";

import { useAppDispatch } from "../store/hook";
import { resetSearch } from "../store/slice/searchSlice";
import { resetBooking } from "../store/slice/bookingSlice";

const Home = () => {
    const dispatch = useAppDispatch()

    dispatch(resetSearch())
    dispatch(resetBooking())

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