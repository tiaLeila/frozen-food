import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    padding: 25px;
`;

export const Checking = styled.div`
    p {text-align: center; margin-top: 20px; font-size: 1.2rem;}
`;

export const Loader = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;

    border-radius: 50%;
    border: 3px solid #efefef;
    border-top-color: #40df9b;
    border-top-width: 5px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        60% { transform: rotate(270deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const Content = styled.div`
    align-self: flex-start;

    margin-bottom: 100px;
    text-align: center;

    h2 { margin: 17px auto; }
    p { line-height: 1.4; margin-bottom: 15px;}

    @media (min-width: 768px) {
        max-width: 750px;
    }
`;
/* 72259e 40df9b 39c9a8 33b9b2 3bb2b8 */
