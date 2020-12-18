import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from 'react-icons/io'

export const Container = styled.div`
    padding-bottom: 100px;

    scroll-behavior: smooth;
`;

export const Header = styled.header`
    padding: 35px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #F45563;

    h1 { max-width: 500px; text-align: center; color: #fff; }
`;

export const CTAHeader = styled.button`
    padding: 20px 35px;

    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    background-color: #000;
    border: 4px solid #fff;
    border-radius: 5px;

    transition: all .1s ease;
    &:active { transform: scale(0.9, 0.9) }
`;

export const HeaderImg = styled.img`
    width: 50%;
    max-width: 250px;
    margin-top: 25px;
`;

export const Ceias = styled.ul`
    margin: 20px auto;
    
    list-style: none;

    header h1 {
        font-family: 'Pinyon Script', cursive;
        font-size: 4rem;
        text-align: center;
        font-weight: 200;
        color: #00B494;
    }

    @media (min-width: 768px) {width: 600px;}
`;

export const CTA = styled.button`
    padding: 20px 35px;
    width: 100%;

    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    border: 4px solid #fff;
    border-radius: 5px;

    background-color: ${({ctaColor}) => ctaColor};

    transition: all .1s ease;
    &:active { transform: scale(0.9, 0.9) }
`;

export const Promo = styled.div`
    padding: 80px 15px;

    color: #fff;
    background-color: #00B494;
    text-align: center;
    box-shadow: 0 0 10px #0005;

    h1, h2 { font-weight: normal; }
    h1 span, h2 span { font-weight: bold; }

    h1 span { font-size: 2.5rem; color: #000; }

    div { margin-bottom: 30px;}

    @media (min-width: 768px) {
        ${CTA} {
            width: 455px;
        }
    }
`;

export const IndividualIngredients = styled.article`
    header {
        padding: 30px 5px;

        text-align: center;

        p { color: #777; font-size: 1.2rem; }
        h1 { font-size: 2.4rem}        
    }

    @media (min-width: 768px) {
        max-width: 650px;
        margin: 0 auto;
    }
`;

export const IngredientWrapper = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: baseline;
`;

//
export const AnyDoubt = styled(motion.a)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  z-index: 99;

  background-color: #fff;
  border: 4px solid #00e676;
  border-radius: 20px;
  text-decoration: none;
  color: #555;

  p { margin-right: 10px; font-size: 1.2rem; }

`;
export const WppLogoIcon = styled(IoLogoWhatsapp)`
  font-size: 3rem;
  color: #00e676;
`;