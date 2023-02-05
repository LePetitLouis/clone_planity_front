import React from "react";

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { HeaderContainer, HeaderContent, Nav, ButtonsContainer, List, ListItem } from "./HeaderStyles";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to={`/`}><Logo style={{ width: '100px' }} /></Link>
                <Nav>
                    <List>
                        <ListItem><Link to={`/coiffeur`} style={{ color: 'var(--white)' }}>Coiffeur</Link></ListItem>
                        <ListItem><Link to={`/barbier`} style={{ color: 'var(--white)' }}>Barbier</Link></ListItem>
                        <ListItem><Link to={`/manucure`} style={{ color: 'var(--white)' }}>Manucure</Link></ListItem>
                        <ListItem><Link to={`/institut-beaute`} style={{ color: 'var(--white)' }}>Institut de beauté</Link></ListItem>
                    </List>
                </Nav>
                <ButtonsContainer>
                    <Button onClick={() => console.log('add shop')}>Ajouter un établissement</Button>
                    <Button onClick={() => console.log('login')}>Se connecter</Button>
                </ButtonsContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;