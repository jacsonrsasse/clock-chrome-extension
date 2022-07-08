import styled from 'styled-components';

export const ClockDesign = styled.div`
    background-color: ${(props) => props.theme['bg-main']};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;

    & > div {
        width: 25rem;
        height: 8.75rem;
        border-radius: 0.5rem;
        background-color: ${(props) => props.theme['bg-clock']};

        & > svg {
            width: 100%;
            height: 100%;
            background-color: transparent;
            overflow: auto;
        }
    }
`;
