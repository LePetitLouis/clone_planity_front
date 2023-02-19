import styled from 'styled-components';

export const CollaboratorCardContainer = styled.div`
    border: 1px solid var(--grey-200);
    border-radius: var(--border-radius-medium);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 36px 8px 8px;
    gap: 8px;
    min-width: 0;
    max-width: 100%;
`;

export const CollaboratorCardAvatar = styled.div`
    display: flex;
    align-items: flex-start;
    min-width: 44px;
`;

export const CollaboratorCardAvatarLetter = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 100%;
    text-transform: uppercase;
    background: var(--grey-900);
    color: var(--white);
    justify-content: center;
    align-items: center;
    display: flex;
    font: var(--medium) var(--body-1);
`;

export const CollaboratorCardName = styled.h2`
    text-align: center;
    font: var(--regular) var(--body-3);
    overflow: hidden;
`;