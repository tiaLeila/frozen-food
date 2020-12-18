import styled from 'styled-components';
import { MdHighlightOff } from 'react-icons/md';
import { motion } from 'framer-motion';


export const ModalContent = styled(motion.div)`
    position: absolute;
    width: fit-content;

    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    border-radius: 4px;
`;
export const IconClose = styled(MdHighlightOff)`
    position: absolute;

    color: #fff;
    z-index: 9999999999;

`;
export const ModalWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999999;

    background-color: #000000bb;
`; 