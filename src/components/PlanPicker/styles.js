import styled from 'styled-components';
import { Article } from '../styledComponents';
import { motion } from 'framer-motion';

// STYLES

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const Plans = styled(Article)`
    margin-bottom: 50px;

    p { font-size: 1.2rem; }
`;

export const Header = styled.header`
    text-align: center;

    h1 { font-family: 'Open Sans Condensed', sans-serif; text-align: center; font-size: 2.4rem; font-weight: bold; color: #0d4d4e; margin-bottom: 20px; }
    h2 { margin-bottom: 30px; color: #888; }
`; 

export const PlanInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0px 0px 10px #ccc;
    margin: 0 10px;
    padding: 15px;

    border-radius: 10px;

    h3 { font-size: 2rem; font-weight: bold; font-family: 'Open Sans Condensed', sans-serif; }

`;

export const PlanPrice = styled(motion.p)`
    margin: 20px 0;
    span { font-size: .7rem; }
`;

export const PlanItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {font-size: 1.2rem; font-weight: bold; }
    ul { display: flex; list-style: none; width: 100%; margin: 20px 0; }
`;

export const PlanItem = styled.li`
    width: 33.333%;
    padding: 15px 0;
    font-size: 1.2rem;
    text-align: center;
    border: solid 1px #ddd;
    border-right: none;
    background: transparent;
    cursor: pointer;

    &:last-child { border-right: solid 1px #ddd; border-top-right-radius: 5px; }
    &:first-child { border-bottom-left-radius: 5px; }

    ${ ({ active }) => active ? 'background: #38c4ac; color: #fff;' : '' }
`;

export const PlanInfoSubmit = styled.button`
    width: 100%;
    padding: 30px 10px;

    border: none;
    border-radius: 4px;
    background: #38c4ac;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;

    ${ ({disabled}) => disabled ? `background: #38c4ac55;` : ''}
`;

