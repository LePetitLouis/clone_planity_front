// components
import { RecapContainer, RecapHeader, RecapTitle, RecapHeaderAddress, RecapStepOne, RecapStepOneTitle, RecapStepOneTime, RecapStepOnePrice, RecapStepTwo, RecapStepTwoDate, RecapStepTwoTime, RecapStepThree, RecapStepThreeName, RecapStepThreePhone, RecapComments } from "./RecapStyles";
import Step from "../ui/step/Step";
import Button from "../ui/button/Button";
import Timeslot from "../timeslot/Timeslot";
import LoginForm from "../ui/form/login/LoginForm";
import InputTextarea from "../ui/input/inputTextarea/InputTextarea";
import { CgMathPlus } from "react-icons/cg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

// store
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { selectBooking, setTime, setDate, setComment } from "../../store/slice/bookingSlice";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../../store/slice/authSlice";
import { selectSearch } from "../../store/slice/searchSlice";

// utils
import { monthNames } from "../../utils";
import { useState } from "react";
import { formatPhoneNumber } from "react-phone-number-input";


const Recap = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const search = useAppSelector(selectSearch)
    const booking = useAppSelector(selectBooking)
    const auth = useAppSelector(selectAuth)

    const [showComments, setShowComments] = useState(false);
    const [dateStart, setDateStart] = useState<Date>(search.date ? search.date : new Date(Date.now()));

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

    const nextWeek = () => {
        setDateStart(new Date(dateStart.getTime() + 7 * 24 * 60 * 60 * 1000))
    }

    const previousWeek = () => {
        setDateStart(new Date(dateStart.getTime() - 7 * 24 * 60 * 60 * 1000))
    }
    
    return (
        <RecapContainer>
            <RecapHeader>
                <RecapTitle>{booking.benefit?.title}</RecapTitle>
                <div style={{ 'display': 'flex', 'gap': '5px', 'alignItems': 'center' }}>
                    <CiLocationOn size={15} />
                    <RecapHeaderAddress>{booking.shop?.address}, {booking.shop?.postalCode} {booking.shop?.city}</RecapHeaderAddress>
                </div>
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
                    <>
                        <FiChevronLeft size={25} color={(dateStart.toLocaleDateString() === search.date?.toLocaleDateString() || dateStart.toLocaleDateString() === new Date().toLocaleDateString()) ? '#F7F7F7' : 'var(--grey-700)' } cursor={(dateStart.toLocaleDateString() === search.date?.toLocaleDateString() || dateStart.toLocaleDateString() === new Date().toLocaleDateString()) ? 'not-allowed' : 'pointer'} style={{ position: 'absolute', top: '30px', left: '20px'}} onClick={previousWeek} />
                        <Timeslot dateStart={dateStart} openingHours={booking.shop?.openingHours} onClick={(year, month, date, time) => handleSelectedDateTime(year, month, date, time)} />
                        <FiChevronRight size={25} cursor="pointer" style={{ position: 'absolute', top: '30px', right: '20px' }} onClick={nextWeek} />
                    </>
                    ) 
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
                    <RecapStepThreePhone>{formatPhoneNumber(auth.phone)}</RecapStepThreePhone>
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