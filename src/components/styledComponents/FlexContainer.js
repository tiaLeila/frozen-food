import styled from 'styled-components';

import componentPropsHelper from './componentPropsHelper';

// Component FlexContainer
const FlexContainer = styled.div`
    display: flex;
    /* applying propsHelpers */
    ${componentPropsHelper}
`;

export default FlexContainer;