import React, { useEffect } from "react";

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as LogoDark } from '../../assets/images/logo-dark.svg';
import { HeaderContainer, HeaderContent, Nav, ButtonsContainer, List, ListItem } from "./HeaderStyles";
import Button from "../ui/button/Button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        console.log(location.pathname);
    }, [location.pathname]);

    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to={`/`}>{ pathname === '/' ? <Logo style={{ width: '100px' }} /> : <LogoDark style={{ width: '100px' }} /> }</Link>
                <Nav>
                    <List>
                        <ListItem><Link to={`/coiffeur`} style={{ color: pathname === '/' ? 'var(--white)' : 'var(--grey-900)' }}>Coiffeur</Link></ListItem>
                        <ListItem><Link to={`/barbier`} style={{ color: pathname === '/' ? 'var(--white)' : 'var(--grey-900)' }}>Barbier</Link></ListItem>
                        <ListItem><Link to={`/manucure`} style={{ color: pathname === '/' ? 'var(--white)' : 'var(--grey-900)' }}>Manucure</Link></ListItem>
                        <ListItem><Link to={`/institut-beaute`} style={{ color: pathname === '/' ? 'var(--white)' : 'var(--grey-900)' }}>Institut de beauté</Link></ListItem>
                    </List>
                </Nav>
                <ButtonsContainer>
                    <Button onClick={() => console.log('add shop')} color="var(--grey-600)" backgroundColor="var(--grey-200)" rounded>Ajouter un établissement</Button>
                    <Button onClick={() => console.log('login')} color="var(--white)" backgroundColor="var(--grey-700)" rounded>Se connecter</Button>
                </ButtonsContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;