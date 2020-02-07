import React from "react";
import logo from "../../assets/logo.svg";
import Footer from "../../components/footer"
import { Container, Logo } from "./styles";

export default function Home() {
  return (
      <Container>
        <Logo src={logo} alt="logo" />
        <br />
        <br />
        <Footer />
      </Container>
  );
}
