import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Content,
    Loader,
    Checking,
    Header,
    Box,
    BoxCTA
} from './styles';

import { H1, CTA, P } from '../SalesPage/styles'; 


const availableClubPlaces = Math.floor((Math.random() * (4 - 2) + 2));

const PreOrderPage = () => {
    const [checking, setChecking] = useState(true);
    const [checking2, setChecking2 ] = useState(false);

    const history = useHistory();

    setTimeout(() => setChecking(false), 6000)
    setTimeout(() => setChecking2(true), 4000)

    return (
        <Container>
        {
            checking
                ?   <Checking>
                        <H1 fontSize="2rem">Verificando disponibilidade...</H1>
                        <Loader/>
                        {
                            checking2
                                ?   <p>Encontramos {availableClubPlaces} vagas</p>
                                :   <p>Aguarde...</p>
                        }
                    </Checking>
              
                :   <Content>
                        <h1>UFAA!!</h1>
                        <h2>HOJE É SEU DIA DE SORTE</h2>

                        <p>Tem uma vaga aqui para você!</p>
                        <p>Agora, é só escolher os pratos que você deseja receber.</p>
                        <p>Toda semana a gente melhora os pratos e adiciona novos.</p>
                        <p>LEMBRE-SE: se você precisar ou quiser sugerir algum prato específico, que não está no nosso menu, é só me mandar no Whatsapp sua sugestão!</p>

                        <P bold fontColor="#d81414">Clica no botão abaixo, ANTES QUE ESTA VAGA SEJA PREENCHIDA POR OUTRA PESSOA!</P>
                        <CTA
                            onClick={ () => history.push('/order') }
                            bgColor="#00B494"
                        >ESCOLHER MINHAS REFEIÇÕES AGORA</CTA>
                    </Content>

        }
        </Container>
    )
}

export default PreOrderPage;