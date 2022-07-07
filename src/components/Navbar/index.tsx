import { NavbarDesign } from './style';

export const Navbar = () => {
    return (
        <NavbarDesign>
            <div id="burguer-section">
                <input type="checkbox" id="burguer" />
                <label htmlFor="burguer"></label>
            </div>
            <div id="toggle-section">
                <input type="checkbox" id="toggle" />
                <label htmlFor="toggle"></label>
                <span className="ball"></span>
            </div>
        </NavbarDesign>
    );
};
