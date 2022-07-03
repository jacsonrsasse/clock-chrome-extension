import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle } from './components/styles/global';
import { theme } from './components/styles/theme';

const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </React.StrictMode>,
    );
}
