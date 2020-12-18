import React, { useContext, useRef} from 'react'
import api from '../../../services/api';
import { store } from '../../../store'
import {
    FormContainer,
    InputPhone,
    InputSubmit,
    ErrorMessage,
    LockIcon,
    YourDataIsSafe
} from './styles';

const Form = () => {

    // global state
    const { salesPageDispatchers, salesPage: { failure, loading } } = useContext(store);

    // ref
    const inputPhoneRef = useRef();

    const handleSubmit = async event => {
        try {
            event.preventDefault();

            const phoneOnlyNumbers = `${inputPhoneRef.current.value}`.replace(/[^0-9]/g, '');
            const phoneValidation = /^\d{11}$/;
            const phoneIsValid = phoneValidation.test(phoneOnlyNumbers);
            if (phoneIsValid) {

                salesPageDispatchers.asyncSetPhone(phoneOnlyNumbers);
                
                // // call api
                // const response = await api.post('/newLead', { phone: phoneOnlyNumbers });
                // if (response.data.error) throw new Error(`Confere se você colocou o DDD seguido dos 9 digitos.\nEx: (51) 99815-0292`);
                
                // salesPageDispatchers.setPhone(response.data.lead.phone);

                // TESTING 
                salesPageDispatchers.setPhone(inputPhoneRef.current.value);
                // END TESTING 

            } else {
                throw new Error(`Confere se você colocou o DDD seguido dos 9 digitos.\nEx: (51) 99815-0292`);
            }

        } catch (err) {
            inputPhoneRef.current.value = "";
            return salesPageDispatchers.failureSetPhone(err);
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputPhone error={failure ? "true" : undefined} ref={inputPhoneRef} name="phone" placeholder="Seu telefone aqui" required mask="(99) 99999-9999" />
            
            {
                failure
                    ?   <ErrorMessage>
                            {failure.message.split('\n')[0]}<br/>
                            {failure.message.split('\n')[1]}
                        </ErrorMessage>
                    :   null
            }

            <InputSubmit value={ loading ? "Carregando..." : "CONTINUAR LENDO!"} />
            <YourDataIsSafe>
                <LockIcon/>
                <p>Seus dados estão seguros e sua privacidade está protegida!</p>
            </YourDataIsSafe>
        </FormContainer>
    )
}

export default Form;