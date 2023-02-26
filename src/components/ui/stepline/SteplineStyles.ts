import styled from "styled-components";

interface props {
    active: boolean;
}

export const SteplineContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const SteplineStep = styled.div<props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? "var(--primary-400)" : "var(--color-grey-600)")};
    border: 1px solid var(--grey-600);
    color: ${(props) => (props.active ? "var(--white)" : "var(--grey-900)")};
    cursor: ${(props) => (props.active ? "pointer" : "default")};
    transition: all 0.5s ease-in-out;
`;

export const SteplineLine = styled.div<props>`
    flex: 1;
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.active ? "var(--primary-400)" : "var(--grey-600)")};
    transition: all 0.5s ease-in-out;
`;