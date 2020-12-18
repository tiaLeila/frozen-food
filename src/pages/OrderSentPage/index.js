import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../../components/Emoji';
import { motion } from 'framer-motion';
import { store } from '../../store';
import styled from 'styled-components';

// styled components
const OrderSentMessage = styled.article`
    margin-top: 50px;;
    text-align: center;
    color: #888;

    .emoji-celebration { font-size: 3rem; }
    h1 { margin: 10px 0 20px; }
    h2 {
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: normal;
        padding: 0 20px;
    }
`;
const FooterLinks = styled.div`
    bottom: 20px;
    position: absolute;
    width: 100%;
    display: flex;
    flex-flow: column wrap;

    font-size: 1rem;
    a { text-decoration: none; color: #888; }
    a:first-child { margin-bottom: 20px; }

`;

const OrderSent = ( { name } ) => {
    const { plan } = useContext(store);
    const { clientName } = plan;

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}            
        >
            <OrderSentMessage>
                <motion.div
                    initial={{ rotate: -45, x: -30, y: -30, scale: 0.9, opacity: 0.8 }}
                    animate={{ rotate: 45, x: 0, y: 0, scale: 1.1, opacity: 1 }}
                    transition={{
                        yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}
                    
                >
                    <Emoji className="emoji-celebration" symbol="🥳" label="parabéns!" />
                </motion.div>
                <h1>Prontinho, {clientName}!</h1>
                <h2>Já vi aqui os pratos que tu vai querer!</h2>
                <h2>Logo logo vou te chamar no WhatsApp pra gente combinar os detalhes da entrega e de pagamento <Emoji symbol="😉👍" label="ok" /></h2>
        
                <FooterLinks>
                    <a href="https://bit.ly/2JC1rC8" >chamar no WhatsApp agora</a>
                </FooterLinks>
            </OrderSentMessage>
        </motion.div>
    )
}

export default OrderSent;