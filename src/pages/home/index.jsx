import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Footer from '../../components/footer'
import { Container, Logo, Landingpage, Flexbox, Moviedetails } from './styles'
import { fonts } from "../../constants"
import Button from '../../components/button'
import Header from '../../components/header'

export default function Home() {

  const [state, setState] = useState({
    movies: [
      {
        "title": "The Wrath of Titans",
        "image": "https://bit.ly/2V7zsAW",
        "infos": [
          "Fantasy",
          "Animation",
          "Family",
          "Duration: 1h 52m"
        ]
      },
      {
        "title": "The maze",
        "image": "https://bit.ly/39ESCCg",
        "infos": [
          "Fantasy",
          "Animation",
          "Family",
          "Duration: 2h 10m"
        ]
      }
    ]
  })

const { movies } = state

const movie = movies[Math.floor(Math.random() * movies.length)]

  return (
      <Container>
        <Landingpage image={ movie.image }>
          <Header />
            <Moviedetails>
              <h1 className="movietitle">{ movie.title.toUpperCase() }</h1>
              <div className="movieinfo">
                { movie.infos.map( (info, id) => <li key={id}>{info}</li> ) }
              </div>
              <div>
                <Button colored>WATCH MOVIE</Button>
                <Button outline mrl>VIEW INFO</Button>
                <Button pdl>+ ADD TO WISHTLE</Button>
              </div>
            </Moviedetails>
        </Landingpage>
        <br />
        <br />
        
        <Footer />
      </Container>
  );
}
