import { useEffect, useState } from "react";

import { HomeUserDashContainer, HomeUserDashContent, HomeUserDashMenu, HomeUserDashMenuTitle, HomeUserDashMenuList, HomeUserDashMenuListItem, HomeUserDashMenuDivider, HomeUserDashInfos, HomeUserDashMenuDescription, HomeUserDashForm } from "./HomeUserDashStyles";
import InputText from "../../../components/ui/input/inputText/InputText";
import Button from "../../../components/ui/button/Button";
import InputPhone from "../../../components/ui/input/inputPhone/InputPhone";

import { useNavigate } from "react-router-dom";

import { Api } from "../../../services";
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

    const [userInfos, setUserInfos] = useState({
        token: auth.token,
        firstName: auth.firstName,
        lastName: auth.lastName,
        email: auth.email,
        phone: auth.phone,
    });

    const handleVerifyPassword = async () => {
        const response = await Api.Auth.verifyPassword(password);
        if (response.data) {
            setStepPassword('newPassword');
        }
    }

    const handleUpdatePassword = async () => {
        await Api.Auth.updatePassword(newPassword);
    }

    const initInfos = () => {
        setUserInfos({
            token: auth.token,
            firstName: auth.firstName,
            lastName: auth.lastName,
            email: auth.email,
            phone: auth.phone,
        });
    }

    const handleUpdateUser = async () => {
        const response = await Api.Auth.updateProfile(userInfos.firstName, userInfos.lastName, userInfos.email, userInfos.phone);
        if (response.data) {
            dispatch(login(response.data));
        }
    }

    const handleLogout = () => {
        dispatch(logout())
        navigate('/');
    }

    useEffect(() => {
        const initInfos = () => {
            setUserInfos({
                token: auth.token,
                firstName: auth.firstName,
                lastName: auth.lastName,
                email: auth.email,
                phone: auth.phone,
            });
        }

        initInfos();
    }, [auth]);

    console.log(userInfos, auth)

    return (
        <HomeUserDashContainer>
            <HomeUserDashMenu>
                <HomeUserDashMenuTitle>Mon compte</HomeUserDashMenuTitle>
                <nav>
                    <HomeUserDashMenuList>
                        <HomeUserDashMenuListItem onClick={() => setTab('booking')} className={tab === 'booking' ? 'active' : ''}>Mes rendez-vous</HomeUserDashMenuListItem>
                        <HomeUserDashMenuListItem onClick={() => setTab('infos')} className={tab === 'infos' ? 'active' : ''}>Mes informations</HomeUserDashMenuListItem>
                        <HomeUserDashMenuDivider />
                        <HomeUserDashMenuListItem className="danger" onClick={handleLogout}>Se déconnecter</HomeUserDashMenuListItem>
                    </HomeUserDashMenuList>
                </nav>
            </HomeUserDashMenu>
            <HomeUserDashContent>
                {tab === 'infos' && (
                    <>
                        <HomeUserDashInfos>
                            <HomeUserDashMenuTitle>Mes coordonnées</HomeUserDashMenuTitle>
                            <HomeUserDashForm>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <InputText label="Prénom *" border="var(--grey-400)" backgroundInputColor="var(--white)" type="text" rounded colorLabel="var(--grey-900)" placeholder="Prénom" value={userInfos.firstName} onChange={(value) => setUserInfos(prevState => ({ ...prevState, firstName: value }))} />
                                    <InputText label="Nom *" border="var(--grey-400)" backgroundInputColor="var(--white)" type="text" rounded colorLabel="var(--grey-900)" placeholder="Nom" value={userInfos.lastName} onChange={(value) => setUserInfos(prevState => ({ ...prevState, lastName: value }))} />
                                </div>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <InputText label="Email *" border="var(--grey-400)" backgroundInputColor="var(--white)" type="email" rounded colorLabel="var(--grey-900)" placeholder="Email" value={userInfos.email} onChange={(value) => setUserInfos(prevState => ({ ...prevState, email: value }))} />
                                    <InputPhone label="Téléphone portable *" border="var(--grey-400)" placeholder="Téléphone" defaultCountry="FR" value={userInfos.phone} onChange={(value) => setUserInfos(prevState => ({ ...prevState, phone: value }))} />
                                </div>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <Button color="var(--grey-700)" backgroundColor="var(--white)" borderColor="var(--grey-700)" disabled={JSON.stringify(userInfos) === JSON.stringify(auth)}  rounded onClick={initInfos}>Annuler</Button>
                                    <Button color="var(--white)" backgroundColor="var(--grey-700)" disabled={JSON.stringify(userInfos) === JSON.stringify(auth)} rounded onClick={handleUpdateUser}>Enregistrer</Button>
                                </div>
                            </HomeUserDashForm>
                        </HomeUserDashInfos>
                        <HomeUserDashInfos>
                            <HomeUserDashMenuTitle>Mot de passe</HomeUserDashMenuTitle>
                            <HomeUserDashMenuDescription>Pour modifier votre mot de passe, veuillez saisir votre mot de passe actuel pour confirmer votre identité.</HomeUserDashMenuDescription>
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
                        <Button width="100%" color="var(--danger-200)" backgroundColor="var(--white)" borderColor="var(--danger-200)" rounded onClick={handleLogout}>Se déconnecter</Button>
                    </>
                )}
                {tab === 'booking' && (
                    <HomeUserDashInfos>
                        <HomeUserDashMenuTitle>Mes rendez-vous à venir</HomeUserDashMenuTitle>
                        <HomeUserDashMenuDescription>Vous n'avez pas de rendez-vous à venir.</HomeUserDashMenuDescription>
                        <Button color="var(--white)" backgroundColor="var(--grey-700)" rounded onClick={() => navigate('/')}>Prendre RDV</Button>
                    </HomeUserDashInfos>
                )}
            </HomeUserDashContent>
        </HomeUserDashContainer>
    );
};

export default HomeUserDash;