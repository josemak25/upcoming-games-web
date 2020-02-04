import React from 'react'
import { Container, Item, Card, Title } from "./styles" 

export default function index() {
    return (
        <Container>
            <Item>
                <Card>
                    <img src="./img/johnwick.jfif" alt="" />
                    <h5>2017</h5>
                    <Title>
                        <h4>John Wick: Chapter 2</h4>
                        <h6>action, triller</h6>
                        <p>4.8</p>
                    </Title>
                </Card>
            </Item>
        </Container>
    )
}


