import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const BtnClose = styled(MdClose)`
    position: absolute;
    top: -10px;
    right: -5px;
    z-index: 999;

    font-size: 1.8rem;
    border-radius: 50%;
    background-color: #fff;
    color: #555;
    box-shadow: 0 0 3px rgba(0, 0, 0, 1);

    &:hover { cursor: pointer; }
`;

const SelectedMealContent = styled.div`
    width: 180px;
    height: 50px;

    display: flex;
    align-items: center;
    position: relative;

    margin: 10px;

    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    background-color: #fff;

    &:hover { cursor: pointer; }

    img {
        width: 50px;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
    }
    p {
        font-size: .8rem;
        margin-left: 5px;
        line-height: 1.2;
        padding: 3px;
    }

    @media (min-width: 1024px) {
        width: 20vw;
        height: 60px;

        img { width: 60px;}
    }
`;

// animation
const variantsByMediaQuery = {
    minWidth1024px: {
        initial: { scale: 0, x: -400 },
        enter: { scale: 1, x: 0 },
        remove: { zoom: 0, transition: { duration: 0.3 } },
    },
    default: {
        initial: { scale: 0, y: -100 },
        enter: { scale: 1, y: 0 },
        remove: { zoom: 0, transition: { duration: 0.3 } },
    }
}
const SelectedMeal = ( { meal, mealEnter, onClickBtnClose, onClickSelectedMeal} ) => {

    const variantsControl = useAnimation();

    // LOCAL STATE
    // animations
    const [ variants, setVariants ] = useState(
        window.matchMedia("(min-width: 1024px)").matches
            ? variantsByMediaQuery.minWidth1024px
            : variantsByMediaQuery.default
    );

    // MEDIA QUERIES
    useEffect( () => {
        let mounted = true;

        const listener = (mediaQuery, event) => {
            if (mounted) { // only perform state update if the component already mounted. otherwise the following warning is fired: "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function"
                if (event.matches) setVariants(variantsByMediaQuery[mediaQuery])
                else setVariants(variantsByMediaQuery.default)
            }
        }

        const mqlMinWidth1024px = window.matchMedia("(min-width: 1024px)");
        mqlMinWidth1024px.addEventListener( "change", listener.bind(null, "minWidth1024px"))

        // clenup
        return () => {
            mqlMinWidth1024px.removeEventListener( "change", listener);
            mounted = false; // if component is unmounting, the flag 'mounted' is set to false. so that don't be possible perform a state update of unmounted component. 
        }
    }, []);

    variantsControl.start("enter");

    const handleBtnClose = async () => {
        await variantsControl.start("remove");
        onClickBtnClose();
    }

    return (
       <motion.div
            initial={ mealEnter ? "initial" : ""}
            variants={variants}
            animate={variantsControl}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 3
            }}
        >
            <div style={{ position: "relative" }}>
                
                <BtnClose onClick={handleBtnClose} />
                
                <SelectedMealContent onClick={ onClickSelectedMeal } >
                    <img src={meal.imgImported} alt="dish" />
                    <p>{
                        (meal.description.length > 30) ? `${meal.description.substr(0,30)} ...` : meal.description
                    }</p>
                </SelectedMealContent>

            </div>
        </motion.div>
    );

}

export default SelectedMeal;