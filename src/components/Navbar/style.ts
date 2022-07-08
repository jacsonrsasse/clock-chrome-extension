import styled from 'styled-components';

export const NavbarDesign = styled.nav`
    background-color: ${(props) => props.theme['bg-main']};
    width: 100vw;
    height: 100%;
    padding: 0 2.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    & #burguer-section {
        & #burguer {
            display: none;
        }

        & label,
        label::after,
        label::before {
            position: absolute;
            width: 2rem;
            height: 0.3rem;
            background: ${(props) => props.theme['bg-nav-items']};
            transition: 0.6s;
        }

        & label {
            cursor: pointer;

            &::before {
                content: '';
                transform: translateY(-0.75rem);
            }

            &::after {
                content: '';
                transform: translateY(0.75rem);
            }
        }

        & #burguer:checked {
            & + label {
                width: 0px;

                &::before {
                    transform: rotate(45deg) translate(0px);
                }

                &::after {
                    transform: rotate(-45deg) translate(0px);
                }
            }
        }
    }

    & #toggle-section {
        position: relative;

        & #toggle {
            display: none;

            &:checked ~ span.ball {
                transform: translate(24px, -50%);
            }

            & + label {
                display: block;
                width: 3.125rem;
                height: 1.5rem;
                border: 1px solid ${(props) => props.theme['bg-nav-items']};
                border-radius: 30px;
                background-color: ${(props) => props.theme['bg-nav-items']};
                user-select: none;
                cursor: pointer;
            }
        }

        & .ball {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            width: 15px;
            height: 15px;
            background-color: ${(props) => props.theme['bg-main']};
            border-radius: 50%;
            left: 5px;
            z-index: 10;
            transition: transform 0.3s ease-in-out;
        }
    }
`;
