import styled from "styled-components";

interface props {
    border?: string;
    rounded?: boolean;
    height?: string;
    backgroundInputColor?: string;
}

export const InputTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`;

export const LabelTextCustom = styled.label`
    font: var(--medium) var(--body-4);
    color: var(--grey-500);
    position: relative;
`;

export const InputTextCustom = styled.input<props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid ${props => props.border ? props.border : 'var(--grey-300)'};
    border-radius: ${props => props.rounded ? 'var(--border-radius-medium)' : 'none'};
    height: ${props => props.height ? props.height : '40px'};
    background-color: ${props => props.backgroundInputColor ? props.backgroundInputColor : 'transparent'};
    font: var(--medium) var(--body-4);
    transition: opacity ease-in .3s;
    padding: 0 14px;

    &:focus {
        border: 1px solid var(--grey-900);
        outline: none;
    }
`;

export const InputTextError = styled.span`
    font: var(--medium) var(--body-4);
    color: var(--danger-200);
    margin-top: 4px;
`;
