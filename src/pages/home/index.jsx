import React from "react";
import logo from "../../assets/logo.svg";



import {Container, Logo} from './styles'
import GameCard from "../../components/card";
import Rating from "../../components/ratings";
import TabComponent from "../../components/tab-navs/TabComponent";




export default function Home() {
  return (
    <Container>
      {/* <Logo src={logo} alt="logo" /> */}

      <Rating />
      <TabComponent />
      {/* <GameCard /> */}
    </Container>
  );
}


