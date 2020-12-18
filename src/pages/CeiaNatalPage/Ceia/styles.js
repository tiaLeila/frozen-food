import styled from 'styled-components';
import { H1, Li, P } from '../../../components/styledComponents';
import { BsDot } from 'react-icons/bs';

export const Container = styled(Li)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
`;

export const Img = styled.img`
    max-width: 100%;
`;
export const Title = styled(H1)`

`;
export const Ingredients = styled.ul`
    padding: 15px;

    color: #777;
    font-size: 1.1rem;
    list-style-type: circle;
`;
export const ContentWrapper = styled.div`
    padding: 15px;
`;

export const Plans = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;
export const Plan = styled.div`
    text-align: center;
`;
export const Price = styled.div`
    padding: 5px;

    font-size: 2rem;
    color: #c80011;
    border: 1px solid #c8001144;
    border-radius: 5px;

    p { font-size: .8rem; }
    span { font-size: .7rem;}
`;
export const AmountOfPeople = styled.p`
    font-size: .8rem;

    span {font-size: 1.4rem;}
`;