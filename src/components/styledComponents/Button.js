import styled from 'styled-components';

import componentPropsHelper from './componentPropsHelper';

/**
 * buttonTypesProps
 */

const Button = styled.button`
    /* default button */
    /* display: inline-block;
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-color: #CACACA;
    text-shadow: 1px 1px 1px rgba(0,0,0,.2);
    transition: all 0.2s ease; */
    /* font-weight: bold; */
    /* text-transform: uppercase; */

    /* button types */

    /* button colors */

    /* applying propsHelpers */
    ${componentPropsHelper}
`;

export default Button;