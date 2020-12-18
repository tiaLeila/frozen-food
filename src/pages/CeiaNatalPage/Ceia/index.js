import React from 'react';
import {
    Container,
    Img,
    Title,
    Ingredients,
    Plans,
    Plan,
    ContentWrapper,
    AmountOfPeople,
    Price,
} from './styles';

const Ceia = ({ img, title, ingredients, plans, color }) => {
    return (
        <Container cssStyle={`border-top: 10px solid ${color}`}>
            <Img src={img} alt="ceia" />
            <ContentWrapper>
                <Title fontColor={color}>{title}</Title>
                <Ingredients>
                    {
                        ingredients.map( (ingredient, index) => (
                            <li
                                key={index}
                            >{ingredient}</li>
                        ))
                    }
                </Ingredients>

                <Plans>
                    {
                        plans.map( (plan, index) => (
                            <Plan
                                key={index}
                            >
                                <AmountOfPeople>para <span>{plan.amountOfPeople}</span> pessoas</AmountOfPeople>
                                <Price>
                                    <span>R$</span> {(plan.price / plan.amountOfPeople).toFixed(0)}
                                    <p>preço por pessoa</p>
                                </Price>
                            </Plan>
                        ))
                    }
                </Plans>
            </ContentWrapper>
        </Container>
    )
}

export default Ceia;