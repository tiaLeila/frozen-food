import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 10px;

    text-align: center;
    color: #888;

    ${ ({ selected }) => selected ? 'color: #00B494;' : '' }

    img {
        width: 100%;
        height: 100%;

        border-radius: 50%;
        transition: all .2s ease-in-out;
        
        ${ ({ selected }) => selected ? 'border: 7px solid #00B494;' : '' }
    }

    span { line-height: 1 }

    @media (min-width: 768px) {
        width: 21%;
    }

`;