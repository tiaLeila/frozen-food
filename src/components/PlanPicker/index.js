import React, { useContext, useEffect } from 'react';
import { Container, Header, PlanInfo, PlanInfoSubmit, PlanItem, PlanItems, PlanPrice, Plans } from './styles';
import { store } from '../../store';
import { useAnimation } from 'framer-motion';

//
const availablePlans = JSON.parse(process.env.REACT_APP_AVAILABLE_PLANS);

// animation
const planPriceVariants = {
    initial: { scale: 1, fontWeight: "normal" },
    animate: { scale: 1.1, fontWeight: "bolder" },
}

const PlanPicker = ({ onSubmit }) => {

    // GLOBAL STATE
    const { plan, planDispatchers } = useContext(store);
    const { setPlan } = planDispatchers;

    // animation
    const planPriceVariantsControl = useAnimation();

    const planItemOnClickHandle = async selectedPlan => {
        setPlan(selectedPlan);
        await planPriceVariantsControl.start("animate");
        await planPriceVariantsControl.start("initial");
    }

    return (
        <Container>

        <Plans width="100%" m_midth="80%" l_width="70%" xl_width="50%" margin="0 auto" >
            <Header>
                <h2>Escolha um plano para continuar</h2>
                <h1>PLANOS</h1>
            </Header>

            <PlanInfo>
                <PlanItems>
                    {/* <p>refeições por semana:</p> */}
                    <ul>
                        {
                            availablePlans.map( planItem => (
                                <PlanItem
                                    onClick={planItemOnClickHandle.bind(null, planItem)}
                                    active={ plan.amountMeals === planItem.amountMeals ? true : false}
                                >{planItem.amountMeals}</PlanItem>
                            ) )
                        }
                    </ul>
                </PlanItems>

                <h3>{plan.amountMeals} REFEIÇÕES</h3>
                <PlanPrice
                    variants={planPriceVariants}
                    animate={planPriceVariantsControl}
                >
                    <span>R$</span> {plan.pricePerMeal?.toFixed(2)} / refeição
                </PlanPrice>

                <PlanInfoSubmit
                    disabled={plan.amountMeals ? false : true}
                    onClick={onSubmit}
                    // onClick={ () => eventTracker( plan.amountMeals, plan.pricePerMeal ) }
                >
                    {
                        plan.amountMeals
                            ? `QUERO PLANO ${plan.amountMeals} REFEIÇÕES`
                            : 'CLIQUE EM UM PLANO ACIMA'
                    }
                </PlanInfoSubmit>
            </PlanInfo>

        </Plans>

        </Container>
    )
}

export default PlanPicker;