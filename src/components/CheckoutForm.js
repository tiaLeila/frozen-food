import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { store } from '../store';
import api from '../services/api';
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { componentPropsHelper } from './styledComponents';
import {FcLock} from 'react-icons/fc';

// styled components
const Form = styled.form`
    display: flex;
    flex-flow: column wrap;

    .checkout-form-input {
        padding: 20px 0px;
        margin: 5px 0px;

        font-size: 1.4rem;
        color: #3bb2b8;
        border: none;
        outline:none;
        text-align: center;
        box-shadow: 0 0 2px #3bb2b888;
        border-radius: 5px;
    }
    .checkout-form-input::placeholder,
    .checkout-form-input::-webkit-input-placeholder { color: #3bb2b888; }



    @media (min-width: 768px) {  }

`;
const PhoneErrorMessage = styled.p`
    margin-bottom: 20px;
    padding: 5px;
    
    font-size: 1rem;
    color: #e15554;
    background-color: #e1555422;
    border-radius: 4px;
`;

const InputSubmit = styled.input`
    padding: 20px 0;
    margin-top: 5px;
    margin-bottom: 10px;
    
    border: none;
    outline: none;
    background-color: #3bb2b8;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;

    ${componentPropsHelper}
`;
const LockIcon = styled(FcLock)`
    font-size: 1.1rem;
    margin-right: 5px;
`;
const YourDataIsSafe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;

    text-align: center;
    color: #aaa;

    p {margin: 0 !important; font-size: .8rem !important;}
`;


const CheckoutForm = () => {
    // Global State
    const { plan, planDispatchers, selectedMeals: { data: selectedMeals} } = useContext(store);

    // Local State
    const [ state, setState ] = useState({
        name: "",
        phone: "",
        phoneIsValidated: false
    });

    const [ showErrorMessage, setShowErrorMessage ] = useState(false);

    const [ loading, setLoading ] = useState(false);

    // history
    const history = useHistory();

    /**
     * 
     * @param {*} event 
     */
    const handleChange = ({ target }) => {
        const name = target.name;
        const value = 
            name === "phone"
                ?   `${target.value}`.replace(/[^0-9]/g, '')
                :   target.value

        let isValidated = state.phoneIsValidated;
        const phoneisValid = /^\d{11}$/;
        if ( name === "phone" ) {
            isValidated = phoneisValid.test( value );
        }
        
        setState({
            ...state,
            [name]: value,
            phoneIsValidated: isValidated
        })
    }

    /**
     * 
     * @param {*} event
     */
    const handleSubmit = async e => {
        try {
            e.preventDefault();

            if ( !state.phoneIsValidated ) {
                setShowErrorMessage(true);
                return false;
            }

            // const data = {
            //     client: {
            //         name: state.name,
            //         phone: `${state.phone}`
            //     },
            //     meals: selectedMeals,
            //     selectedPlan: plan.amountMeals,
            // }

            // setLoading(true);
            // const response = await api.post('/newOrder', data);
            // setLoading(false);

            // if ( response.data.error ) throw new Error(`Eiita! Aconteceu algo errado que não está certo! Me chama no WhatsApp para que eu possa finalizar teu pedido. MEU WHATSAPP: (51) 99815-0292`);

            // planDispatchers.setClientName(state.name);
            // history.push('/order-sent');

            // TEST
            let text = '';
            selectedMeals.forEach( ({description}, i) => {
                if ( (i+1) === selectedMeals.length) {
                    text += `*#${i+1}* _${description}_;_${plan.amountMeals}`;
                }
                else text += `*#${i+1}* _${description}_;\n\n`;
            })

            text = encodeURIComponent(text);
            alert('Vou te redirecionar para nosso Whatsapp. Aí, basta enviar a mensagem que já estará preenchida com seu pedido. OK?')
            const url = `https://api.whatsapp.com/send?phone=5551998150292&text=${text}`;

            window.location = url;
            // END TEST
        } catch (err) {
            setLoading(false);
            // alert(err.message);

            // TESTING
            alert('Eiita! Aconteceu algo errado que não está certo! Me chama no WhatsApp para que eu possa finalizar teu pedido. MEU WHATSAPP: (51) 99815-0292')
            // END TESTING
        }
    }    

    return (
        <Form onSubmit={ handleSubmit } >
            <input className="checkout-form-input" name="name" type="text" value={ state.name } onChange={ handleChange } required placeholder="seu nome" />

            <InputMask mask="(99) 99999-9999" className="checkout-form-input" name="phone" value={ state.phone } onChange={ handleChange } required placeholder="seu WhatsApp" />
            
            {
                showErrorMessage ?
                    <PhoneErrorMessage>Confere se você colocou o DDD seguido dos 9 digitos.<br/>Ex: (51) 99815-0292</PhoneErrorMessage>
                : ''
            }

            <InputSubmit disabled={loading ? true : false} bgGray={loading ? true : false} type="submit" value={loading ? "CARREGANDO..." : "FINALIZAR"} />
            
            <YourDataIsSafe>
                <LockIcon/>
                <p>Seus dados estão seguros e sua privacidade está protegida!</p>
            </YourDataIsSafe>
        </Form>
    )
}

export default CheckoutForm;