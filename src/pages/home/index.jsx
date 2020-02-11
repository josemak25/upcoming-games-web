import React from "react";
import logo from "../../assets/logo.svg";



import {Container, Logo} from './styles'
import GameCard from "../../components/card";
import Rating from "../../components/ratings";




export default function Home() {
  return (
    <Container>

      
      <Logo src={logo} alt="logo" />
      {/* <GameCard /> */}
      <Rating />
        
    </Container>
  );
}


