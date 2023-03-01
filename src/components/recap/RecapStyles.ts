import styled from "styled-components";

export const RecapContainer = styled.div`
    width: 100%;
    max-width: calc(976px + 2*var(--gutter));
    padding-top: 64px;
    margin-left: auto;
    margin-right: auto;
`;

export const RecapHeader = styled.div`
    padding-top: 32px;
    display: flex;
    flex-direction: column;
`;

export const RecapTitle = styled.h1`
    font: var(--semibold) var(--title-3);
    margin: 0;
    padding: 0;
`;

export const RecapHeaderAddress = styled.span`
    display: flex;
    font: var(--regular) var(--body-5);
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: -2px;
    color: var(--grey-600);
`;


// Step 1
export const RecapStepOne = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const RecapStepOneTitle = styled.h1`
    font: var(--medium) var(--body-4);
    margin: 0;
    padding: 0;
`;

export const RecapStepOneTime = styled.span`
    white-space: nowrap;
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
`;

export const RecapStepOnePrice = styled.span`
    white-space: nowrap;
    font: var(--medium) var(--body-4);
    color: var(--grey-700);
    display: inline-flex;
    align-items: center;

    &::before {
        content: "";
        flex-shrink: 0;
        width: 4px;
        height: 4px;
        background-color: var(--grey-400);
        border-radius: 100%;
        margin-left: 8px;
        margin-right: 8px;
    }
`;

// End of Step 1

// Step 2
export const RecapStepTwo = styled.div`
    flex: 1;
    display: flex;
`;

export const RecapStepTwoDate = styled.p`
    font: var(--medium) var(--body-4);
    margin: 0;
    padding: 0;
`;

export const RecapStepTwoTime = styled.span`
    color: var(--grey-600);
    font: var(--regular) var(--body-4);

    &::before {
        content: "";
        flex-shrink: 0;
        width: 4px;
        height: 4px;
        background-color: var(--grey-400);
        border-radius: 100%;
        margin-left: 8px;
        margin-right: 8px;
    }
`;

// End of Step 2

// Step 3
export const RecapStepThree = styled.div`
    flex: 1;
    display: flex;
`;

export const RecapStepThreeName = styled.h1`
    font: var(--medium) var(--body-4);
    margin: 0;
    padding: 0;
`;

export const RecapStepThreePhone = styled.span`
    color: var(--grey-600);
    font: var(--regular) var(--body-4);

    &::before {
        content: "";
        flex-shrink: 0;
        width: 4px;
        height: 4px;
        background-color: var(--grey-400);
        border-radius: 100%;
        margin-left: 8px;
        margin-right: 8px;
    }
`;

// End of Step 3

type props = {
    show: boolean;
};

// Comments
export const RecapComments = styled.div`
    padding: 20px 32px;
    transition: max-height var(--timing-medium) var(--ease-out);
    box-shadow: var(--shadow-regular);
    background-color: var(--white);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--grey-200);
    margin: 6px 0 32px 0;
    display: ${(props: props) => (props.show ? "block" : "none")};
    height: ${(props: props) => (props.show ? "250px" : "0px")};
`;