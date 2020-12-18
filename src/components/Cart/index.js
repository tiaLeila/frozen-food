import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import ButtonMeal from '../ButtonMeal';
import Emoji from '../Emoji';
import CheckoutForm from '../CheckoutForm';
import SelectedMeal from '../SelectedMeal';
import { store } from '../../store';
import Modal from '../Modal';
import styled from 'styled-components';
import { Span } from '../styledComponents'
import ModalFeedbackPlans from '../ModalFeedbackPlans';

//
const dishes = JSON.parse(process.env.REACT_APP_DISHES);

// styled components
const ModalMealDetails = styled.article`
    width: 80vw;
    max-height: 87vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        box-shadow: 0 0 10px rgba(0,0,0,.2);
    }
    button {
        margin: 0 auto;
        margin-bottom: 10px;
        width: 70%;
    }
    button:last-child { margin-bottom: 20px; }
    p {
        margin: 20px 0;
        text-align: center;
        font-size: 1.2rem;
        color: #777;
        padding: 20px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: stretch;

        img { width: 40vw; }
        div { flex-grow: 1; }
    }
    @media (min-width: 1366px) {
        width: 60vw;
    }
`; 

const ModalCheckout = styled.article`
    width: 90vw;
    height: 85vh;
    padding: 10px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


    color: #777;
    text-align: center;

    header {
        width: 100%;
        font-size: 1.3rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
    }
    header p:last-child { font-size: 1rem; }

    main p { font-size: 1.3rem; margin-bottom: 20px; }

    @media (min-width: 768px) {
        width: fit-content;
        height: fit-content;
        max-height: 85vh;
    }
    @media (min-width: 1024px) {
    }
`;

const StyledCart = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;

    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media (min-width: 1024px) {
        top: 0;
        bottom: 0;
        right: 0;
        width: 25vw;
        
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
`;
const StyledCartHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    
    div {
        flex-grow: 1;
    }
    button {
        width: fit-content;
        padding: 15px 30px;
        
        background: #72259e;
        border: none;
        color: #fff;
        font-size: 1.3rem;
        border-radius: 8px;
        cursor: pointer;
        
        transition: all .1s;
    }
    button[disabled] {
        opacity: 0.4;
    }
    button:active {
        background: #72259e;
        transform: translate3d(-10px, 10px, 10px);
    }

    @media (min-width: 1024px) {
        flex-wrap: wrap;
        button { width: 100%; }
        div { text-align: center; margin-bottom: 10px;}
    }
`;

const CarouselWrapper = styled.div`
    width: 100%;
    display: flex;

    padding-top: 5px;
    margin-right: 20px;

    overflow: auto;

    @media (min-width: 1024px) {
        height: 100%;
        flex-direction: column;
        align-content: flex-start;
        align-items: center;

        padding-bottom: 200px;
    }
`;

// animation
const selectedMealVariantsByMediaQuery = {
    minWidth1024px: {
        beforeEnter: { marginTop: "-100px" },
        enter: { marginTop: "0px", transition: { duration: 0.7 } }
    },
    default: {
        beforeEnter: { marginLeft: "-100px" },
        enter: { marginLeft: "0px", transition: { duration: 0.7 } }
    }
}
// ===================================================== //
function Cart () {
    // GLOBAL STATE
    const { plan, selectedMeals: { data: selectedMeals, lastOperation }, selectedMealsDispatchers } = useContext(store);

    // ____________________________________________________
    
    // LOCAL STATE
    // animations
    
    const [ selectedMealVariants, setSelectedMealVariants ] = useState(
        window.matchMedia("(min-width: 1024px)").matches
            ? selectedMealVariantsByMediaQuery.minWidth1024px
            : selectedMealVariantsByMediaQuery.default
    )

    const [ carouselVariants, setCarouselVariants ] = useState({
        beforeEnter: { marginBottom: "100px" },
        enter: { marginBottom: "0px", transition: { duration: 0.7 } },
    })
    
    // MEDIA QUERIES
    useEffect( () => {
        let mounted = true;
        const listener = (mediaQuery, event) => {
            if (mounted) { // only perform state update if the component already mounted. otherwise the following warning is fired: "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function"
                if (event.matches) setSelectedMealVariants(selectedMealVariantsByMediaQuery[mediaQuery])
                else setSelectedMealVariants(selectedMealVariantsByMediaQuery.default)
            }
        }

        const mqlMinWidth1024px = window.matchMedia("(min-width: 1024px)");
        mqlMinWidth1024px.addEventListener( "change", listener.bind(null, "minWidth1024px") )

        // cleanup
        return () => {
            mqlMinWidth1024px.removeEventListener( "change", listener );
            mounted = false; // if component is unmounting, the flag 'mounted' is set to false. so that don't be possible perform a state update of unmounted component. 
            
        }
    }, []);

    // ____________________________________________________



    // modal meal
    const [ modalMealState, setModalMealState] = useState({
        modalIsOpen: false,
        mealToShow: dishes[0],
        indexOfMealToShow: 0, // I initialize 'indexOfMealToShow with 0 (zero), because 'null' or 'false' can throw some error in specific situations like acces a array at index null. Ex.: arr(null), arr(false).
    });
    const openModalMeal = (mealToShow, indexOfMealToShow) => setModalMealState({ modalIsOpen: true, mealToShow, indexOfMealToShow });
    const closeModalMeal = () => setModalMealState({ ...modalMealState, modalIsOpen: false });

    // modal checkout
    const [ modalCheckoutIsOpen, setModalCheckoutIsOpen ] = useState(false);
    const openModalCheckout = () => setModalCheckoutIsOpen(true);
    const closeModalCheckout = () => setModalCheckoutIsOpen(false);
    
    //
    const addMeal = async (meal) => selectedMealsDispatchers.addMeal(meal);
    const removeMeal = async (mealToRemove, indexOfMealToRemove) => await selectedMealsDispatchers.removeMeal(mealToRemove, indexOfMealToRemove);

    // amount meals left
    const mealsLeft = plan.amountMeals - selectedMeals.length;

    // ========================================================== //
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}            
        >
            
            {/* MODAL MEAL */}
            <Modal
                isOpen={modalMealState.modalIsOpen}
                onRequestClose={closeModalMeal}
                locationHash="#refeicao"
            >
                <ModalMealDetails>
                    <img src={modalMealState.mealToShow.imgImported} alt="dish" />
                    <div>
                        <p>{modalMealState.mealToShow.description}</p>
                        <ButtonMeal buttonType="add" onClick={() => addMeal(modalMealState.mealToShow)}>add</ButtonMeal>
                        <ButtonMeal disabled={ selectedMeals.findIndex( meal => meal.img === modalMealState.mealToShow.img) === -1 } buttonType="remove" onClick={() => removeMeal(modalMealState.mealToShow, modalMealState.indexOfMealToShow)}>remover</ButtonMeal>
                    </div>
                </ModalMealDetails>
            </Modal>

            {/* MODAL CHECKOUT */}
            <Modal
                isOpen={modalCheckoutIsOpen}
                onRequestClose={closeModalCheckout}
                locationHash="#finalizar"
            >
                <ModalCheckout>
                    <header>
                        <Emoji symbol="😃" lable="sorriso" style={{ fontSize: "2.5rem" }} />
                        <p>Obaa!!</p>
                        <p>Você escolheu {selectedMeals.length} refeições</p>
                    </header>
                    <main>
                        <p>Agora, pra gente finalizar, é só escrever aqui <Emoji symbol="👇" lable="abaixo" /></p>
                        <CheckoutForm />
                    </main>
                </ModalCheckout>
            </Modal>

            {/* CAROUSEL */}
            <motion.div
                variants={carouselVariants}
                initial="beforeEnter"
                animate="enter"
            >
            <StyledCart>
                <StyledCartHeader>
                    <div>
                        {
                            plan.amountMeals
                                ?   <>
                                        <p>
                                            {
                                                (selectedMeals.length < plan.amountMeals) ?
                                                    <Span fontRed fontSize={1.2} >{selectedMeals.length} </Span> :
                                                (selectedMeals.length > plan.amountMeals) ?
                                                    <Span fontColor="#72259e" fontSize={1.2} >{selectedMeals.length} </Span> :
                                                    <Span fontColor="#00d1a4" fontSize={1.2} >{selectedMeals.length} </Span>
                                            }
                                            de <Span fontColor="#00d1a4" fontSize={1.2} >{plan.amountMeals}</Span> refeições
                                        </p>

                                        <p>{ (mealsLeft > 0) ? `adicione + ${mealsLeft} para continuar` : '' }</p>
                                    </>
                                : <p>Add alguma refeição</p>
                        }
                    </div>
                    <button onClick={ openModalCheckout } disabled={ (plan.amountMeals && plan.amountMeals <= selectedMeals.length ? false : true) } style={ (selectedMeals.length < plan.amountMeals) ? {cursor: "not-allowed"} : {}} >Pronto</button>
                </StyledCartHeader>
                    
                <CarouselWrapper>
                    {
                    selectedMeals.map( ( meal, i ) => {
                        const order = selectedMeals.length - i;

                        return (
                            order === 1 // this is the last meal of the 'selectedMeal' array
                            ?
                                ( lastOperation === 1 ) // was added one meal
                                ?
                                    <div style={{ order }} key={i} >
                                        <SelectedMeal
                                            mealEnter={true}
                                            onClickBtnClose={ removeMeal.bind(null, meal, i) }
                                            onClickSelectedMeal={ openModalMeal.bind(null, meal, i) }
                                            meal={ meal } 
                                        />
                                    </div>
                                : // was removed one meal
                                    <div style={{ order }} key={i} >
                                    <motion.div
                                        variants={selectedMealVariants}
                                    >
                                        <SelectedMeal
                                            onClickBtnClose={ removeMeal.bind(null, meal, i) }
                                            onClickSelectedMeal={ openModalMeal.bind(null, meal, i) }
                                            meal={ meal }
                                        />
                                    </motion.div>
                                    </div>
                            : // this is NOT the last meal of the 'selectedMeal' array
                                <div style={{ order }} key={i} >
                                <motion.div
                                    variants={selectedMealVariants}
                                >
                                    <SelectedMeal
                                        onClickBtnClose={ removeMeal.bind(null, meal, i) }
                                        onClickSelectedMeal={ openModalMeal.bind(null, meal, i) }
                                        meal={ meal }
                                    />
                                </motion.div>
                                </div>
                        )                        
                    })
                    }
                </CarouselWrapper>

            </StyledCart>
            </motion.div>

            {/* MODAL FEEDBACK PLANS */}
            <ModalFeedbackPlans />

        </motion.div>
    );
}

export default Cart;