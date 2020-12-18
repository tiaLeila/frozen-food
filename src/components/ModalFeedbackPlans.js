import React, { useState, useContext } from 'react';
import Modal from './Modal';
import { store } from '../store';
import styled from 'styled-components';
import { P } from './styledComponents';

//
const availablePlans = JSON.parse(process.env.REACT_APP_AVAILABLE_PLANS);
let availablePlansSorted = [...availablePlans];
availablePlansSorted.sort( (a, b) => a.amountMeals < b.amountMeals ? -1 : 1);
availablePlansSorted = availablePlansSorted.map(value => value.amountMeals);

const FeedbackContent = styled.div`
    width: 80vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    padding: 20px 10px;
    text-align:center;

    div:nth-child(1) {
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        width: 100%;

        p { font-size: 1.2rem; color: #3bb2b8; }
        span { font-size: 1rem; color: #aaa; }
    }
    div:nth-child(2) {
        font-size: 1.2rem;
        color: #888;
        width: 100%;
        span { font-size: 1.4rem; color: #39c9a8; }
    }

    button {
        padding: 10px 20px;
        margin-top: 20px;
        
        border: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #40df9b;
        border-radius: 2px;
    }

    @media (min-width: 768px) { width: 50vw; }
    @media (min-width: 1024px) { width: 30vw; }
`;

const ModalFeedbackPlans = () => {

    // GLOBAL STATE
    const { plan, selectedMeals: { data: selectedMeals } } = useContext(store);

    // LOCAL STATE
    const [ modalState, setModalState ] = useState({
        isOpen: false,
        aux: null,
        feedback: {
            moneySavedSoFar: 0,
            upToNextPlan: 0,
            moneyCanBeSaved: 0,
        }
    });

    const closeModal = () => setModalState({ ...modalState, isOpen: false });

    //
    (function showFeedback() {
        const selectedMealsLength = selectedMeals.length;
        const { aux } = modalState;

        let feedbackMilestones = [];
        availablePlansSorted.find( (value, index) => {
            if (plan.amountMeals === value) {
                feedbackMilestones = availablePlansSorted.slice(index);
                return true;// end the loop
            }
        });

        // generate message
        const generateFeedback = () => {
            const pricePerMealOfCurrentplan = plan.pricePerMeal;

            let nextPlanIndex = null;
            let nextPlan = null;
            let pricePerMealOfNextplan = null;

            if (selectedMealsLength === availablePlansSorted[availablePlansSorted.length - 1]) {
                nextPlan = availablePlansSorted[availablePlansSorted.length - 1]
                pricePerMealOfNextplan = availablePlans.find(el => el.amountMeals === nextPlan).pricePerMeal;

            } else {
                nextPlanIndex = 1 + feedbackMilestones.findIndex( value => value === selectedMealsLength );
                nextPlan = feedbackMilestones[nextPlanIndex];
                pricePerMealOfNextplan = availablePlans.find(el => el.amountMeals === nextPlan).pricePerMeal;
            }

            const moneyCanBeSaved = (pricePerMealOfCurrentplan * nextPlan) - (pricePerMealOfNextplan * nextPlan);

            const pricePerMealOfSelectedPlan = availablePlans.find(el => el.amountMeals === selectedMealsLength).pricePerMeal;
            const moneySavedSoFar = (pricePerMealOfCurrentplan * selectedMealsLength) - (pricePerMealOfSelectedPlan * selectedMealsLength);

            const upToNextPlan = nextPlan - selectedMealsLength;

            const feedback = { moneySavedSoFar, upToNextPlan, moneyCanBeSaved}
            return feedback;
        }

        feedbackMilestones.forEach( value => {
            if ( selectedMealsLength === value && aux != value ) setModalState({
                isOpen: true,
                aux: value,
                feedback: generateFeedback()

            });// when state changes the rest of this function is not execute. that's because component rerender and the function is invoked again. 
        } );


        if ( // this condition is execute only if no one of conditions above pass.
            aux != null
            && !feedbackMilestones.find( value => selectedMealsLength === value )
        ) setModalState({ ...modalState, aux: null });

    })()

    return (
        
        <Modal
            isOpen={modalState.isOpen}
            onRequestClose={closeModal}
            locationHash="#economize-mais"
        >
            <FeedbackContent>
                {
                    (
                        plan.amountMeals === availablePlansSorted[availablePlansSorted.length - 1]
                        && selectedMeals.length === availablePlansSorted[availablePlansSorted.length - 1]
                    )
                    ?
                        <P fontSize="1.2" fontGray >Prontinho! Você ainda pode continuar adicionando refeições para economizar ainda mais :D</P>
                    :
                        <>
                            <div>
                                <p>R$ {modalState.feedback.moneySavedSoFar.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                                <span>economizados até agora</span>
                            </div>
                            <div>
                            {
                                selectedMeals.length === 12
                                    ? <p>Você pode continuar adicionando refeições e economizando ainda mais :D</p>
                                    : <>
                                        <p>quer economizar + de R$ <span>{modalState.feedback.moneyCanBeSaved.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span> ?</p>
                                        
                                        <p>é só adicionar <span>+ {modalState.feedback.upToNextPlan}</span> refeições</p>
                                    </>
                            }
                            </div>
                        </>
                }
                <button onClick={closeModal}>Beleza!</button>
            </FeedbackContent>
        </Modal>
    )
}

export default ModalFeedbackPlans;






/**
 * HARD CODED VALUE OF 'showFeedback' FUNCTION
 */

// (function showFeedback() {
//     const selectedMealsLength = selectedMeals.length;
//     const { aux } = modalState;

//     const feedbackMilestones = (
//         plan.amountMeals === 4 ? [4, 6, 9, 12] :
//         plan.amountMeals === 6 ? [6, 9, 12] :
//         plan.amountMeals === 9 ? [9, 12] :
//         plan.amountMeals === 12 ? [12] : []
//     )

//     // generate message
//     const generateFeedback = () => {
//         const pricePerMealOfCurrentplan = plan.pricePerMeal;

//         let nextPlanIndex = null;
//         let nextPlan = null;
//         let pricePerMealOfNextplan = null;

//         if (selectedMealsLength === 12) {
//             nextPlan = 12
//             pricePerMealOfNextplan = availablePlans[`plan${nextPlan}`].pricePerMeal;

//         } else {
//             nextPlanIndex = 1 + feedbackMilestones.findIndex( value => value === selectedMealsLength );
//             nextPlan = feedbackMilestones[nextPlanIndex];
//             pricePerMealOfNextplan = availablePlans[`plan${nextPlan}`].pricePerMeal;
//         }

//         const moneyCanBeSaved = (pricePerMealOfCurrentplan * nextPlan) - (pricePerMealOfNextplan * nextPlan);

//         const pricePerMealOfSelectedPlan = availablePlans[`plan${selectedMealsLength}`].pricePerMeal;
//         const moneySavedSoFar = (pricePerMealOfCurrentplan * selectedMealsLength) - (pricePerMealOfSelectedPlan * selectedMealsLength);

//         const upToNextPlan = nextPlan - selectedMealsLength;

//         const feedback = { moneySavedSoFar, upToNextPlan, moneyCanBeSaved}
//         return feedback;
//     }

//     feedbackMilestones.forEach( value => {
//         if ( selectedMealsLength === value && aux != value ) setModalState({
//             isOpen: true,
//             aux: value,
//             feedback: generateFeedback()

//         });// when state changes the rest of this function is not execute. that's because component rerender and the function is invoked again. 
//     } );

//     if ( // this condition is execute only if no one of conditions above pass.
//         aux != null
//         && selectedMealsLength != feedbackMilestones[0]
//         && selectedMealsLength != feedbackMilestones[1]
//         && selectedMealsLength != feedbackMilestones[2]
//         && selectedMealsLength != feedbackMilestones[3]
//     ) setModalState({ ...modalState, aux: null });
// })()