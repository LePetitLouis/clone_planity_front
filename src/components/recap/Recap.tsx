import { RecapContainer, RecapHeader, RecapTitle, RecapHeaderAddress, RecapStepOne, RecapStepOneTitle, RecapStepOneTime, RecapStepOnePrice, RecapStepTwo, RecapStepTwoDate, RecapStepTwoTime } from "./RecapStyles";
import Step from "../ui/step/Step";
import Button from "../ui/button/Button";
import Timeslot from "../timeslot/Timeslot";
import LoginForm from "../ui/form/login/LoginForm";

import { useAppDispatch, useAppSelector } from "../../store/hook"
import { selectBooking, setTime, setDate } from "../../store/slice/bookingSlice";
import { useNavigate } from "react-router-dom";

import { monthNames } from "../../utils";
import { selectAuth } from "../../store/slice/authSlice";


const Recap = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const booking = useAppSelector(selectBooking)
    const auth = useAppSelector(selectAuth)

    const handleSelectedDateTime = (year: string, month: string, date: string, time: string) => {
        const monthNumber = monthNames.indexOf(month.replace(/^[a-z]/, (m) => { return m.toUpperCase() })) + 1;
        console.log(`${year}-${monthNumber}-${date} ${time}`);
        console.log(new Date(`${year}-${monthNumber}-${date} ${time}`))

        dispatch(setDate(new Date(`${year}-${monthNumber}-${date} ${time}`)))
        booking.benefit?.time && dispatch(setTime(booking.benefit?.time))
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
                <Button onClick={() => navigate(`/details-shop/${booking.shop?.id}`)} color="var(--primary-200)" backgroundColor="var(--white)">Supprimer</Button>
            </Step>

            <Step number="2" title="Choix de la date & heure">
                {!booking.date ? (
                    <Timeslot dateStart={new Date("May 7, 2023")} openingHours={booking.shop?.openingHours} onClick={(year, month, date, time) => handleSelectedDateTime(year, month, date, time)} />) 
                    : (
                    <>
                        <RecapStepTwo>
                            <RecapStepTwoDate>
                                {booking.date.toLocaleDateString('fr-FR', { weekday: 'long' })} {booking.date.getDay()} {booking.date.toLocaleDateString('fr-FR', { month: 'long' })} {booking.date.toLocaleDateString('fr-FR', { year: 'numeric' })}
                            </RecapStepTwoDate>
                            <RecapStepTwoTime>à {booking.date.getHours()}h {booking.date.getMinutes() === 0 ? '' : booking.date.getMinutes()}</RecapStepTwoTime>
                        </RecapStepTwo>
                        <Button onClick={() => dispatch(setDate(null))} color="var(--primary-200)" backgroundColor="var(--white)">Modifier</Button>
                    </>
                )}
            </Step>

            <Step number="3" title="Identification">
                {!auth.isAuthenticated && <LoginForm /> } 
            </Step>
        </RecapContainer>
    );
};

export default Recap;