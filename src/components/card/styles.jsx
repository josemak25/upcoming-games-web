import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

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
         margin: 10px;
         width: 90%;

         img {
           width: 100%;
         }

         h5 {
           margin-top: -15%;
           color: white;
           font-family: Arial, Helvetica, sans-serif;
           padding: 0 0 0 20px;
         }

         h4 {
           width: 100%;
           opacity: 0.7;
         }

         h6 {
           color: grey;
           font-size: smaller;
           opacity: 0.7;
           margin-left: -87%;
           margin-top: 20%;
         }

         p {
           width: 18%;
           margin-top: 10%;
           text-align: center;
           padding-top: 5px;
           height: 25px;
           border: rgb(233, 24, 136) solid 1px;
           border-radius: 3px;
           color: rgb(233, 24, 136);
           margin-left: 40%;
         }

         @media only screen and (max-width: 500px) {
           width: 100%;
           margin: auto;
           margin-top: 50px;
         }

         .card h4 {
           margin-top: 35px;
         }

         .card h5 {
           padding: 0 0 0 30px;
         }

         @media only screen and (max-width: 360px) {
           .card h6 {
             margin-top: 55px;
           }

           .card p {
             margin-top: 13.5%;
           }
         }
       `;

export const Title = styled.div`
         @media only screen and (max-width: 500px) {
           margin-top: 30px;
         }

         @media only screen and (max-width: 360px) {
           margin-top: 20px;
         }
       `;