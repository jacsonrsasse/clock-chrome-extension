import styled from 'styled-components';
import { Cardarea } from './components/Cardarea';
import { Clock } from './components/Clock';
import { Navbar } from './components/Navbar';

const AppDesign = styled.div`
    display: grid;
    grid-template-rows: 60px 140px 1fr;
`;

function App() {
    return (
        <AppDesign>
            <Navbar />
            <Clock />
            <Cardarea />
        </AppDesign>
    );
}

export default App;
