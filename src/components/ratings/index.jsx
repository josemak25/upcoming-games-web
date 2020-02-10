import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, MainContainer, MainStar } from "./styles";




function Rating() {

  // const [rating, setRating] = useState(null);
  // const [hover, setHover] = useState(null);

  const [state, setState] = useState({
    rating: null,
    hover: null
  })

  return (
    <Container>
      <MainContainer>
        <p className="reviews"> based on 3.456 reviews</p>
        <MainStar>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setState({ ...state, rating: ratingValue })}
                />

                <FaStar
                  className="star"
                  color={ratingValue <= (state.hover || state.rating) ? "#ff0075" : "black"}
                // size={100}
                // onMouseEnter={() => setState({ ...state, rating: ratingValue})}
                // onMouseLeave={() => setState({...state, hover: null}) }
                />
              </label>
            );
          })}
          <p>3.4</p>
        </MainStar>
      </MainContainer>
    </Container>
  );
}

export default Rating;
