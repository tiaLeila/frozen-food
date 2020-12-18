import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    position: fixed;
    top: 5px;
    right: 5px;
    padding: 5px;
    
    background-color: #000e;
    border-radius: 5px;
    /* color: #F45563; */
    /* color: #FE6847; */
    color: #FF4242;
    text-align: center;

    h1 {
        font-size: 1.1rem;
    }
`;

export const TimerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;

    span { font-size: 2rem; color: #999; }
`;
export const Timer = styled.div`
    padding: 0px 15px;

    p:nth-child(1) { font-size: 2rem; font-weight: bold; line-height: 1; }
    p:nth-child(2) { color: #ccc; font-size: .8rem; line-height: 1;}

`;