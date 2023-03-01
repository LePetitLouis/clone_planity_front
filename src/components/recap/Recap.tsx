// components
import { RecapContainer, RecapHeader, RecapTitle, RecapHeaderAddress, RecapStepOne, RecapStepOneTitle, RecapStepOneTime, RecapStepOnePrice, RecapStepTwo, RecapStepTwoDate, RecapStepTwoTime, RecapStepThree, RecapStepThreeName, RecapStepThreePhone, RecapComments } from "./RecapStyles";
import Step from "../ui/step/Step";
import Button from "../ui/button/Button";
import Timeslot from "../timeslot/Timeslot";
import LoginForm from "../ui/form/login/LoginForm";
import InputTextarea from "../ui/input/inputTextarea/InputTextarea";
import { CgMathPlus } from "react-icons/cg";

// store
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { selectBooking, setTime, setDate, setComment } from "../../store/slice/bookingSlice";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../../store/slice/authSlice";
import { selectSearch } from "../../store/slice/searchSlice";

// utils
import { monthNames } from "../../utils";
import { useState } from "react";


const Recap = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const search = useAppSelector(selectSearch)
    const booking = useAppSelector(selectBooking)
    const auth = useAppSelector(selectAuth)

    const [showComments, setShowComments] = useState(false);

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

    const handleUpdateComment = (comment: string) => {
        dispatch(setComment(comment))
    }

    const handleConfirmationBooking = () => {
        console.log('confirmation')
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
                {!auth.token ? <LoginForm /> 
                : 
                <RecapStepThree>
                    <RecapStepThreeName>{auth.firstName} {auth.lastName}</RecapStepThreeName>
                    <RecapStepThreePhone>{auth.phone}</RecapStepThreePhone>
                </RecapStepThree>
                } 
            </Step>}

            {booking.date && auth.token &&
                <>
                <Button color="var(--grey-700)" backgroundColor="var(--white)" rounded onClick={() => setShowComments(!showComments)}>
                    <CgMathPlus size={15} />
                    Informations complémentaires
                </Button>
                <RecapComments show={showComments}>
                    <InputTextarea height="100%" rounded placeholder="Informations complémentaires" label="" value={booking.comment} onChange={(value) => handleUpdateComment(value)} />
                </RecapComments>
                <Button width="100%" color="var(--white)" backgroundColor="var(--grey-700)" rounded onClick={handleConfirmationBooking}>Confirmer</Button>
                </>
            }
        </RecapContainer>
    );
};

export default Recap;