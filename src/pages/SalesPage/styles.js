import styled from 'styled-components';
import componentPropsHelper from '../../components/styledComponents/componentPropsHelper';
import { FcOnlineSupport } from 'react-icons/fc';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import bgHeader from '../../img/sales-letter-header.jpg'
export const Container = styled.div`
    width: 100vw;

    font-family: 'Raleway', sans-serif;
    background-color: #ddd;
`;

export const Header = styled.header`
    padding-bottom: 140px;

    text-align: center;
    background-color: #333;
    background-image: url(${bgHeader});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    div {
        width: 100%;
        padding: 12px;
        
        font-size: 2.4rem;
        color: #fff;
        font-weight: 600;
        line-height: 1;
        background-color: #d81414;
    }

    h1 {
        width: 90%;
        margin: 50px auto;

        span {
            margin: -0.5px;

            font-size: 1.7rem;
            line-height: -50px;
            color: #fff;
            background-color: #000;
        }
    }

    p {
        width: 90%;
        margin: 0 auto;

        line-height: 1.4;
        font-style: italic; 
        font-size: 1.2rem;
        color: #fff;
    }

    @media (min-width: 600px) {
    }

    @media (min-width: 768px) {
        h1 {
            span {
                font-size: 2.3rem;
            }
        }
    }

    @media (min-width: 1024px) {
        p, h1 { width: 75%; }
    }

    @media (min-width: 1366px) {
        p, h1 { max-width: 820px; }
    }

`;

export const Main = styled.main`
    width: 90%;
    margin: 0 auto;
    margin-top: -70px;
    padding: 15px;

    background-color: #fff;
    box-shadow: 0 0 10px #aaa3;

    @media (min-width: 768px) {
        padding: 7%;
    }

    @media (min-width: 1024px) {
        width: 75%;
    }

    @media (min-width: 1366px) {
        max-width: 820px;
        padding: 95px;
    }

`;

export const FadeBox = styled.div`
    position: relative;
`;

export const Fade = styled.div`
    position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent, #fff);
`;

export const BtnReadMore = styled.button`
    padding: 20px;
    width: 100%;
    margin-bottom: 80px;

    border: none;
    background-color: #d81414;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    
    &:active {
        transform: scale(0.9);
    }
`;

export const P = styled.p`
    margin-bottom: 40px;

    font-size: 1.3rem;
    line-height: 38px;
    color: #444;

    ${componentPropsHelper}    
`;

export const H1 = styled.h1`
    margin-bottom: 40px;
    padding: 0 10px;
    
    text-align: center;
    ${componentPropsHelper}
`

export const TestimonialsImages = styled.div`
    margin-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


    img { width: 100%; padding: 5px;}

    @media (min-width: 1024px) {
        img { width: 50%; }
    }
`;

export const CTA = styled.button`
    padding: 20px;
    margin-bottom: 20px;
    
    font-size: 2rem;
    background-color: #d81414;
    color: #fff;
    font-weight: bold;
    box-shadow: 0 0 20px #8888;
    border: none;
    ${ ({ bgColor }) => bgColor ? `background-color: ${bgColor};` : null }

    transition: scale 2s ease-in-out;
    &:active { transform: scale(0.9); }
    cursor: pointer;
`;

export const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    margin-top: 20px;

    background-color: #fff;
`;

export const IconWpp = styled(FaWhatsapp)`margin-right: 10px; color: #555; `;
export const IconPhoneCall = styled(FiPhone)`margin-right: 10px; color: #555; `;

export const Contact = styled.div`
    padding: 20px;

    text-align: center;

    h2 { font-size: 2rem; }
    h5 { margin-top: 10px; font-weight: normal; font-size: 1.3rem; }
    p {
        display: flex;
        align-content: center;
        margin-top: 20px;

        font-size: 1.7rem;
        font-family: Arial, sans-serif;
    }
    p:hover,
    p:hover ${IconWpp},
    p:hover ${IconPhoneCall} { color: #00B494;}
`;

export const IconSupport = styled(FcOnlineSupport)`
    width: 200px;
    height: 200px;
    padding: 20px;
    
    border-radius: 50%;
    background-color: #ddd;
`;