import React, { useState, useRef} from 'react'
import api from '../../../services/api';
import {
    FormContainer,
    InputPhone,
    InputSubmit,
    ErrorMessage,
    LockIcon,
    YourDataIsSafe,
    WppIcon,
    SuccesMessage,
} from './styles';

const Form = ({ btnClicked }) => {

    // local state
    const [failure, setFailure] = useState(false);
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState(null);

    // ref
    const inputPhoneRef = useRef();

    const handleSubmit = async event => {
        try {
            event.preventDefault();

            const phoneOnlyNumbers = `${inputPhoneRef.current.value}`.replace(/[^0-9]/g, '');
            const phoneValidation = /^\d{11}$/;
            const phoneIsValid = phoneValidation.test(phoneOnlyNumbers);
            if (phoneIsValid) {
                setLoading(true);
                
                // call api
                const response = await api.post('/newCeiaOrder', {
                    phone: phoneOnlyNumbers,
                    btnClicked: btnClicked
                });
                
                if (response.data.error) {
                    throw new Error(`Confere se você colocou o DDD seguido dos 9 digitos.\nEx: (51) 99815-0292`);
                }
                setLoading(false);
                setPhone(inputPhoneRef.current.value);
            } else {
                throw new Error(`Confere se você colocou o DDD seguido dos 9 digitos.\nEx: (51) 99815-0292`);
            }

        } catch (err) {
            inputPhoneRef.current.value = "";
            setPhone(null);
            setFailure(err);
            return null;
        }
    }

    return (
        !phone
            ?
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

                    <InputSubmit value={ loading ? "Carregando..." : "ENCOMENDAR!"} />
                    <YourDataIsSafe>
                        <LockIcon/>
                        <p>Seus dados estão seguros e sua privacidade está protegida!</p>
                    </YourDataIsSafe>
                </FormContainer>
            :
            // SUCCESS MESSAGE
                <SuccesMessage>
                    <h1>Pronto! Recebi sua encomenda aqui!</h1>
                    <p>Logo logo vou te chamar no WhatsApp pra gente combinar os demais detalhes!</p>
                    <p>Mas se você quiser, pode</p>
                    <a
                        href="https://api.whatsapp.com/send?phone=5551998150292&text=Ol%C3%A1!%20Quero%20finalizar%20a%20encomenda%20da%20ceia!"
                        target="_blank"
                    ><WppIcon /> chamar agora no WhatsApp</a>
                </SuccesMessage>
    )
}

export default Form;