import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    height: 64px;
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;
    z-index: 200;
`;

export const HeaderContent = styled.div`
    max-width: calc(1176px + 2*var(--gutter));
    margin: auto;
    position: relative;
    display: grid;
    grid: 1fr/[logo] auto [center] 1fr [right] auto;
    column-gap: 20px;
    align-items: center;
    width: 100%;
    padding-left: var(--gutter);
    padding-right: var(--gutter);
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const ListItem = styled.li`
    text-decoration: none;
    list-style: none;
    font: var(--regular) var(--body-4);
    color: var(--grey-900);
    cursor: pointer;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 40px;
    padding: 0 16px;
    border: 0;
    border-radius: 8px;
    background-color: #ff9000;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ff7300;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;
