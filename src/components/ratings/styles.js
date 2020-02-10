import styled from "styled-components";


export const Container = styled.div`
    background: white;
    width: 50%;
    min-height: 30px;
    border: 1 px solid;

`

export const MainContainer = styled.div`
    background: red;
    width: 35%;
    height: 80px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid; */

    input[type = "radio"] {
            display: none;
        }

    .reviews::before {
        content: 'Rating';
        font-size: 15px;
        color: white;
    }
    .reviews {
        font-size: 13px;
    }

    .star {
        font-size: 20px;
        padding: 0 6px 0 6px;
        /* stroke: rgb(233, 24, 136);
        stroke-width: 10; */
        /* border: 1px solid #ff0075; */
    }

`

export const MainStar = styled.div`
    display: flex;
    justify-content: space-evenly;

    p {
        border: 1px solid white;
    }
`