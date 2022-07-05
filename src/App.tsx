import styled from 'styled-components';
import { Cardarea } from './components/Cardarea';
import { Clock } from './components/Clock';
import { Navbar } from './components/Navbar';

const AppDesign = styled.div`
    display: grid;
    grid-template-rows: 3.75rem 1fr 3fr;
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw; */
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
