import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }

    #root {
        width: 100vw;
        height: 100vh;
        display: flex;
    }
`;
