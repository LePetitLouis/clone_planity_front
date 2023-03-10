import { useEffect, useState } from "react";

import { HomeUserDashContainer, HomeUserDashContent, HomeUserDashMenu, HomeUserDashMenuTitle, HomeUserDashMenuList, HomeUserDashMenuListItem, HomeUserDashMenuDivider, HomeUserDashInfos, HomeUserDashMenuDescription, HomeUserDashForm, HomeUserDashBookingTitle, HomeUserDashBookingDescription } from "./HomeUserDashStyles";
import InputText from "../../../components/ui/input/inputText/InputText";
import Button from "../../../components/ui/button/Button";
import InputPhone from "../../../components/ui/input/inputPhone/InputPhone";

import { useNavigate } from "react-router-dom";

import { API } from "../../../services";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { login, logout, selectAuth } from "../../../store/slice/authSlice";

const HomeUserDash = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);

    const [tab, setTab] = useState<'booking' | 'infos'>('booking');

    const [stepPassword, setStepPassword] = useState<'password' | 'newPassword'>('password');

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [bookings, setBookings] = useState([]);

    const [userInfos, setUserInfos] = useState({
        token: auth.token,
        firstName: auth.firstName,
        lastName: auth.lastName,
        email: auth.email,
        phone: auth.phone,
        role: auth.role,
    });

    const handleVerifyPassword = async () => {
        const data = await API.user.verifyPassword(password);
        if (data) {
            setStepPassword('newPassword');
        } else {
            alert('Mot de passe incorrect');
        }
    }

    const handleUpdatePassword = async () => {
        const data = await API.user.verifyPassword(newPassword);
        if (data) {
            setStepPassword('password');
            setPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } else {
            alert('Erreur lors de la mise ?? jour du mot de passe');
        }
    }

    const initInfos = () => {
        setUserInfos({
            token: auth.token,
            firstName: auth.firstName,
            lastName: auth.lastName,
            email: auth.email,
            phone: auth.phone,
            role: auth.role,
        });
    }

    const handleUpdateUser = async () => {
        const response = await API.user.updateProfile(userInfos.firstName, userInfos.lastName, userInfos.email, userInfos.phone);
        if (response.data) {
            dispatch(login(response.data));
        }
    }

    const handleLogout = () => {
        API.auth.logout();
        dispatch(logout())
        navigate('/');
    }

    const handleCancelBooking = async (id: number) => {
        const data = await API.booking.deleteBooking(id);
        if (data) {
            const newBookings = bookings.filter((booking: any) => booking.id !== id);
            setBookings(newBookings);
        } else {
            alert('Erreur lors de l\'annulation du rendez-vous');
        }
    }

    useEffect(() => {
        const initInfos = () => {
            setUserInfos({
                token: auth.token,
                firstName: auth.firstName,
                lastName: auth.lastName,
                email: auth.email,
                phone: auth.phone,
                role: auth.role,
            });
        }

        initInfos();
    }, [auth]);

    useEffect(() => {
        const fetchBookings = async () => {
            const data = await API.booking.getBookingByUser();
            if (data) setBookings(data);
            else setBookings([]);
        }

        fetchBookings();
    }, []);

    return (
        <HomeUserDashContainer>
            <HomeUserDashMenu>
                <HomeUserDashMenuTitle>Mon compte</HomeUserDashMenuTitle>
                <nav>
                    <HomeUserDashMenuList>
                        <HomeUserDashMenuListItem onClick={() => setTab('booking')} className={tab === 'booking' ? 'active' : ''}>Mes rendez-vous</HomeUserDashMenuListItem>
                        <HomeUserDashMenuListItem onClick={() => setTab('infos')} className={tab === 'infos' ? 'active' : ''}>Mes informations</HomeUserDashMenuListItem>
                        <HomeUserDashMenuDivider />
                        <HomeUserDashMenuListItem className="danger" onClick={handleLogout}>Se d??connecter</HomeUserDashMenuListItem>
                    </HomeUserDashMenuList>
                </nav>
            </HomeUserDashMenu>
            <HomeUserDashContent>
                {tab === 'infos' && (
                    <>
                        <HomeUserDashInfos>
                            <HomeUserDashMenuTitle>Mes coordonn??es</HomeUserDashMenuTitle>
                            <HomeUserDashForm>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <InputText label="Pr??nom *" border="var(--grey-400)" backgroundInputColor="var(--white)" type="text" rounded colorLabel="var(--grey-900)" placeholder="Pr??nom" value={userInfos.firstName} onChange={(value) => setUserInfos(prevState => ({ ...prevState, firstName: value }))} />
                                    <InputText label="Nom *" border="var(--grey-400)" backgroundInputColor="var(--white)" type="text" rounded colorLabel="var(--grey-900)" placeholder="Nom" value={userInfos.lastName} onChange={(value) => setUserInfos(prevState => ({ ...prevState, lastName: value }))} />
                                </div>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <InputText label="Email *" border="var(--grey-400)" backgroundInputColor="var(--white)" type="email" rounded colorLabel="var(--grey-900)" placeholder="Email" value={userInfos.email} onChange={(value) => setUserInfos(prevState => ({ ...prevState, email: value }))} />
                                    <InputPhone label="T??l??phone portable *" border="var(--grey-400)" placeholder="T??l??phone" defaultCountry="FR" value={userInfos.phone} onChange={(value) => setUserInfos(prevState => ({ ...prevState, phone: value }))} />
                                </div>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <Button color="var(--grey-700)" backgroundColor="var(--white)" borderColor="var(--grey-700)" disabled={JSON.stringify(userInfos) === JSON.stringify(auth)}  rounded onClick={initInfos}>Annuler</Button>
                                    <Button color="var(--white)" backgroundColor="var(--grey-700)" disabled={JSON.stringify(userInfos) === JSON.stringify(auth)} rounded onClick={handleUpdateUser}>Enregistrer</Button>
                                </div>
                            </HomeUserDashForm>
                        </HomeUserDashInfos>
                        <HomeUserDashInfos>
                            <HomeUserDashMenuTitle>Mot de passe</HomeUserDashMenuTitle>
                            <HomeUserDashMenuDescription>Pour modifier votre mot de passe, veuillez saisir votre mot de passe actuel pour confirmer votre identit??.</HomeUserDashMenuDescription>
                            {stepPassword === 'password' && (
                                <>
                                    <InputText label="Mot de passe *" border="var(--grey-400)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" type="password" value={password} placeholder="Entrez votre mot de passe actuel" onChange={(value) => setPassword(value)} />
                                    <Button color="var(--white)" backgroundColor="var(--grey-700)" disabled={!password} rounded onClick={handleVerifyPassword}>Modifier</Button>
                                </>
                            )}
                            {stepPassword === 'newPassword' && (
                                <>
                                    <div style={{display: 'flex', gap: '10px'}}>
                                        <InputText label="Nouveau mot de passe *" border="var(--grey-400)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" type="password" value={newPassword} placeholder="Nouveau mot de passe" onChange={(value) => setNewPassword(value)} />
                                        <InputText label="Confirmation mot de passe *" border="var(--grey-400)" backgroundInputColor="var(--white)" rounded colorLabel="var(--grey-900)" type="password" value={confirmNewPassword} placeholder="Confirmation mot de passe" onChange={(value) => setConfirmNewPassword(value)} />
                                    </div>
                                    <div style={{display: 'flex', gap: '10px'}}>
                                        <Button color="var(--grey-700)" backgroundColor="var(--white)" borderColor="var(--grey-700)" rounded onClick={() => setStepPassword('password')}>Annuler</Button>
                                        <Button color="var(--white)" backgroundColor="var(--grey-700)" disabled={newPassword !== confirmNewPassword} rounded onClick={handleUpdatePassword}>Enregistrer</Button>
                                    </div>
                                </>
                            )}
                        </HomeUserDashInfos>
                        <Button width="100%" color="var(--danger-200)" backgroundColor="var(--white)" borderColor="var(--danger-200)" rounded onClick={handleLogout}>Se d??connecter</Button>
                    </>
                )}
                {tab === 'booking' && (
                    <HomeUserDashInfos>
                        <HomeUserDashMenuTitle>Mes rendez-vous ?? venir</HomeUserDashMenuTitle>
                        {bookings.length > 0 ? (
                            <>
                                <HomeUserDashMenuDescription>Vous avez {bookings.length} rendez-vous ?? venir.</HomeUserDashMenuDescription>
                                {bookings.map((booking: any, index) => (
                                    <HomeUserDashInfos key={index}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                                <div style={{display: 'flex'}}>
                                                    <HomeUserDashBookingTitle>{booking.shop_name}</HomeUserDashBookingTitle>
                                                    <HomeUserDashBookingDescription>{booking.benefit_name}</HomeUserDashBookingDescription>
                                                </div>
                                                <HomeUserDashBookingTitle>le {booking.date} ?? {booking.time}</HomeUserDashBookingTitle>
                                            </div>
                                            <Button color="var(--primary-200)" backgroundColor="var(--white)" rounded onClick={() => handleCancelBooking(booking.id_reservation)}>Annuler</Button>
                                        </div>
                                    </HomeUserDashInfos>
                                ))}
                            </>
                        ) : (
                            <HomeUserDashMenuDescription>Vous n'avez pas de rendez-vous ?? venir.</HomeUserDashMenuDescription>
                        )}
                        <Button color="var(--white)" backgroundColor="var(--grey-700)" rounded onClick={() => navigate('/')}>Prendre RDV</Button>
                    </HomeUserDashInfos>
                )}
            </HomeUserDashContent>
        </HomeUserDashContainer>
    );
};

export default HomeUserDash;