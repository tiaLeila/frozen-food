import React, { useState, useContext, } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ButtonMeal from '../../components/ButtonMeal';
import { MdArrowBack } from 'react-icons/md';
import { store } from '../../store';
import Modal from '../../components/Modal';
import styled from 'styled-components';
import { Section, Article, Div, Img, P } from '../../components/styledComponents';
import Cart from '../../components/Cart';
import PlanPicker from '../../components/PlanPicker';
import Emoji from '../../components/Emoji';

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
        width: 70%;
        padding: 10px 30px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
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

const MealChoiceHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px 10px; 

    font-size: 1.3rem;
    box-shadow: 0 0 4px rgba(0,0,0,.2);
    div {
        flex-grow: 1;
        text-align: center;
        color: #777;
    }    
`;

const MealsWrap = styled(Section)`
    align-items: center;
    padding-top: 15px;
    margin-bottom: 150px;
`;

const Meal = styled(Article)`
    position: relative;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    margin-bottom: 15px;
    border-radius: 20px;
    background-color: white;
    
    img${Img} {
        box-shadow: 0 0 10px rgba(0,0,0,.2);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        
        cursor: pointer;

        @media (min-width: 768px) {
            border-top-right-radius: 20px;
            border-bottom-left-radius: 0px;
        }
    }
`;
const MealInfo = styled(Div)`
    padding: 7px;

    p${P} {
        padding: 5px 5px 0;
        text-align: center;
        font-size: 1rem;
        color: #777;
        font-style: italic;

        cursor: pointer;
    }
`;
const WinterMealsHeader = styled.h2`
    padding: 8px;
    background-color: tomato;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    color: white;
    font-size: 1.2rem;
    font-weight: normal;
`;
const WinterMealsHr = styled.hr`
    width: 100%;
    height: 3px;
    border: none;
    margin-bottom: 15px;
    background-color: #ff6347;
`;

function MealsChoice () {
    // GLOBAL STATE
    const { plan, selectedMealsDispatchers } = useContext(store);
    
    // modal meal
    const [ modalMealState, setModalMealState] = useState({
        modalIsOpen: false,
        mealToShow: dishes[0]
    });
    const openModalMeal = (dish) => setModalMealState({ modalIsOpen: true, mealToShow: dish });
    const closeModalMeal = () => setModalMealState({ ...modalMealState, modalIsOpen: false });


    //
    const [isPickerPlanModalOpen, setIsPickerPlanModalOpen] = useState(false);

    //
    const addMeal = async (meal) => {
        if (plan.amountMeals === null) {
            setIsPickerPlanModalOpen(true);
        } else {
            selectedMealsDispatchers.addMeal(meal);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}            
        >
            
            <Div l_width="75%"> {/* this Div is adapting the' meal-choice' content with 'Cart' on breakpoint 1024px */}

            {/* HEADER */}
            <MealChoiceHeader>
                <div>
                    {
                        plan.amountMeals
                            ? <p>escolha {plan.amountMeals} ou + refeições</p>
                            : <>
                                <Emoji symbol="😋" label="refeições deliciosas" /> hummmm
                              </>
                    }
                </div>

            </MealChoiceHeader>

            {/* MEALS */}
            <MealsWrap xs_flexContainer xs_ff="row wrap" xs_jc="space-evenly" m_ai="stretch" >
                <WinterMealsHeader>para aquecer corpo e alma</WinterMealsHeader>
                <WinterMealsHr />
                {
                    dishes.map( (dish, i) => {
                        const img = require(`../../img/${dish.img}`);
                        dish.imgImported = img;
                        return (
                            <>
                            <Meal xs_width="95%" xs_flexContainer xs_ff="row wrap" xs_ai="stretch" m_width="30%" m_ai="flex-start" style={ i < 6 ? { boxShadow: "0 0 20px #ff634788" } : {} } >
                                <Img xs_width="40%" src={img} m_width="100%" onClick={openModalMeal.bind(null, dish)} alt="dish" />
                                <MealInfo xs_width="60%" xs_flexContainer xs_ff="row wrap" m_width="100%" m_aSelf="stretch" >
                                    <P xs_width="100%" xs_flexContainer xs_ai="center" xs_jc="center" xs_fg="2" onClick={openModalMeal.bind(null, dish)}>{
                                        (dish.description.length > 54) ? `${dish.description.substr(0,54)} ...` : dish.description
                                    }</P>
                                    <Div xs_width="100%" xs_flexContainer xs_jc="flex-end" >
                                        <ButtonMeal buttonType="add" onClick={() => addMeal(dish)}>add</ButtonMeal>
                                    </Div>
                                </MealInfo>
                            </Meal>
                            { i === 5 ? (<WinterMealsHr />) : false} 
                            </>
                        )
                    } )
                }
            </MealsWrap>

            </Div>
            
            {/* CART CAROUSEL */}
            <Cart />

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
                    </div>
                </ModalMealDetails>
            </Modal>

            {/* PLAN PICKER */}
            <Modal
                isOpen={isPickerPlanModalOpen}
                onRequestClose={setIsPickerPlanModalOpen.bind(null, false)}
                locationHash="#escolha-um-plano"
            >
                <PlanPicker
                    onSubmit={setIsPickerPlanModalOpen.bind(null, false)}
                />
            </Modal>

            

        </motion.div>
    );
}

export default MealsChoice;