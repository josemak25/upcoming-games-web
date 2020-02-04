import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: baseline;
    flex-direction: row;
    flex-wrap: wrap;

    @media only screen and (max-width: 500px) {
        display: inline-block;
        width: 100%;
    }

`;

export const Item = styled.div`
`;

export const Card = styled.div`
    background: white;
    color: black;
    box-shadow: 3px 3px 2px #f1f0f0;
    margin: 30px;
    width: 90%;

    img {
        width: 100%;
    }

    h5{
        margin-top: -15%;
        color: white;
        font-family: Arial,
        Helvetica,
        sans-serif;
        padding: 0 0 0 10px;
    }

    h4 {
        margin-top: 5px;
        opacity: 0.7;
    }

    h6 {
        margin-top: -20px;
        color: grey;
        font-size: smaller;
        opacity: 0.7;
    }

    p{
        float: right;
        padding: 2.5%;
        margin-top: -60px;
        border: rgb(233, 24, 136) solid 1px;
        border-radius: 3px;
        color: rgb(233, 24, 136);
        margin-right: 7px;
    }

    @media only screen and (max-width: 500px){
        width: 100%;
        margin: auto;
        margin-top: 30px;
    }

`;

export const Title = styled.div`
`;