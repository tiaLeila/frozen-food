import React, { useState } from 'react';
import {
    Container,
} from './style';

const Ingredient = ({ img, name }) => {
    const [ selected, setSelected ] = useState(false);
    const toggleSelected = () => setSelected(!selected);
    
    return (
        <Container
            selected={selected}
            onClick={toggleSelected}
        >
            <img src={img} alt={name} />
            <span>{name}</span>
        </Container>
    )
}

export default Ingredient;