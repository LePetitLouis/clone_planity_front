// components
import { RecapContainer, RecapHeader, RecapTitle, RecapHeaderAddress, RecapStepOne, RecapStepOneTitle, RecapStepOneTime, RecapStepOnePrice, RecapStepTwo, RecapStepTwoDate, RecapStepTwoTime } from "./RecapStyles";
import Step from "../ui/step/Step";
import Button from "../ui/button/Button";
import Timeslot from "../timeslot/Timeslot";
import LoginForm from "../ui/form/login/LoginForm";

// store
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { selectBooking, setTime, setDate } from "../../store/slice/bookingSlice";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../../store/slice/authSlice";
import { selectSearch } from "../../store/slice/searchSlice";

// utils
import { monthNames } from "../../utils";


const Recap = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const search = useAppSelector(selectSearch)
    const booking = useAppSelector(selectBooking)
    const auth = useAppSelector(selectAuth)

    const handleSelectedDateTime = (year: string, month: string, date: string, time: string) => {
        const monthNumber = monthNames.indexOf(month.replace(/^[a-z]/, (m) => { return m.toUpperCase() })) + 1;
        console.log(`${year}-${monthNumber}-${date} ${time}`);
        console.log(new Date(`${year}-${monthNumber}-${date} ${time}`))

        dispatch(setDate(new Date(`${year}-${monthNumber}-${date} ${time}`)))
        booking.benefit?.time && dispatch(setTime(booking.benefit?.time))
    }

    const handleGoToDetailsShop = () => {
        navigate(`/details-shop/${booking.shop?.id}`)
        dispatch(setDate(null))
    }
    
    return (
        <RecapContainer>
            <RecapHeader>
                <RecapTitle>{booking.benefit?.title}</RecapTitle>
                <RecapHeaderAddress>{booking.shop?.address}, {booking.shop?.postalCode} {booking.shop?.city}</RecapHeaderAddress>
            </RecapHeader>

            <Step number="1" title="Prestation sélectionnée">
                <RecapStepOne>
                    <RecapStepOneTitle>{booking.benefit?.title}</RecapStepOneTitle>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <RecapStepOneTime>{booking.benefit?.time}</RecapStepOneTime>
                        <RecapStepOnePrice>{booking.benefit?.price}</RecapStepOnePrice>
                    </div>
                </RecapStepOne>
                <Button onClick={handleGoToDetailsShop} color="var(--primary-200)" backgroundColor="var(--white)">Supprimer</Button>
            </Step>

            <Step number="2" title="Choix de la date & heure">
                {!booking.date ? (
                    <Timeslot dateStart={search.date ? search.date : new Date(Date.now())} openingHours={booking.shop?.openingHours} onClick={(year, month, date, time) => handleSelectedDateTime(year, month, date, time)} />) 
                    : (
                    <>
                        <RecapStepTwo>
                            <RecapStepTwoDate>
                                {booking.date.toLocaleDateString('fr-FR', { weekday: 'long' })} {booking.date.toLocaleDateString('fr-FR', { day: 'numeric' })} {booking.date.toLocaleDateString('fr-FR', { month: 'long' })} {booking.date.toLocaleDateString('fr-FR', { year: 'numeric' })}
                            </RecapStepTwoDate>
                            <RecapStepTwoTime>à {booking.date.getHours()}h {booking.date.getMinutes() === 0 ? '' : booking.date.getMinutes()}</RecapStepTwoTime>
                        </RecapStepTwo>
                        <Button onClick={() => dispatch(setDate(null))} color="var(--primary-200)" backgroundColor="var(--white)">Modifier</Button>
                    </>
                )}
            </Step>

            {booking.date && <Step number="3" title="Identification">
                {!auth.token && <LoginForm /> } 
            </Step>}
        </RecapContainer>
    );
};

export default Recap;