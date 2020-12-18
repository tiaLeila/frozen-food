import styled from 'styled-components';

import componentPropsHelper from './componentPropsHelper';

const H1 = styled.h1`
    /* applying propsHelpers */
    ${componentPropsHelper}

`;
export default H1;