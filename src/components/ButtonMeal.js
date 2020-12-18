import React from 'react';
import { MdAdd, MdRemove, MdDone } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

// styled components
const Button = styled(motion.button)`
    width: fit-content;
    align-self: flex-end;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 15px;
    
    background: #ccc;
    border: none;
    color: #fff;
    font-size: 1.3rem;
    border-radius: 20px;
    cursor: pointer;

    transition: all .2s;
`;

// animations
const variants = {
    normal: {
        x: 0,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            delay: 0.3,
            duration: 0
        }
    },
    clicked: { 
        x: -20,
        scale: 1.1,
        transition: {
            when: "beforeChildren",
            ease: "easeIn",
            duration: 0.1
        }
    },
}
const fristChildVariants = {
    normal: { x: -25, display: "none" },
    clicked: { x: 0, display: "inline-block", scale: 1.5 },
}
const secondChildVariants = {
    normal: { x: 0, display: "inline-block" },
    clicked: { x: 25, display: "none" },
}

/**
 * 
 * @buttonType can receive "remove" or "add" 
 */
const ButtonMeal = ( { buttonType, onClick, className, children, disabled, style } ) => {

    // animations
    const variantsControl = useAnimation();


    return (
        <Button
            variants={variants}
            initial="normal"
            animate={variantsControl}

            onClick={ async () => {
                onClick();
                await variantsControl.start("clicked");
                await variantsControl.start("normal");
            }}

            className={className}
            style={{
                ...style,
                backgroundColor: (
                    disabled ? "#ccc" :
                    buttonType === "remove" ? "#F45563" :
                    buttonType === "add"    ? "#33b9b2" :  "#ccc"
                )
            }}

            disabled={disabled}
            
        >
            <motion.div variants={fristChildVariants} style={{ padding: "0px 20px" }} >
                <MdDone />
            </motion.div>

            <motion.div variants={secondChildVariants} >
                {
                    buttonType === "remove" ? <><MdRemove style={{ verticalAlign: "middle" }} /> {children}</> :
                    buttonType === "add"    ? <><MdAdd style={{ verticalAlign: "middle" }} /> {children}</>        : "btn"
                }
            </motion.div>
        </Button>
    );

}

export default ButtonMeal;