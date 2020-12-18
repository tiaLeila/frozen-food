import styled from 'styled-components';
import InputMask from 'react-input-mask';
import {FcLock} from 'react-icons/fc';

export const FormContainer = styled.form`
    width: 90vw;
    padding: 20px;

    @media (min-width: 1024px) {
        max-width: 650px;
    }
`;
export const InputPhone = styled(InputMask)`
    width: 100%;
    padding: 20px;

    font-size: 1.4rem;
    color: #777;
    border: none;
    border-radius: 6px;
    
    ${
        ({ error }) =>
            error
                ? `box-shadow: 0 0 5px #F45563;`
                : `box-shadow: 0 0 5px #aaa;`
    }

    &:focus { outline: none; }


`;
export const InputSubmit = styled.input.attrs( props => ({ type: "submit" }))`
    margin-top: 20px;
    width: 100%;
    padding: 20px;

    white-space: normal;

    background-color: #d81414;
    font-weight: bold;
    border: none;
    color: #fff;
    font-size: 1.4rem;
    border-radius: 6px;
    
    transition: scale 2s ease-in-out;
    &:active { transform: scale(0.9); }
`;
export const ErrorMessage = styled.p`
    padding: 5px;
    margin-top: 20px;
    position: relative;

    color: #fff;
    font-weight: bolder;
    border-radius: 6px;
    background-color: #F45563aa;

    &::before {
        content: '';
        position: absolute;
        top: -10px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #F45563aa;
    }    
`;
export const LockIcon = styled(FcLock)`
    font-size: 1.1rem;
    margin-right: 5px;
`;
export const YourDataIsSafe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;

    text-align: center;
    font-size: .8rem;
    color: #aaa;
`;