import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NoImage from "../asset/popcorn.png";

const Container = styled.div`
  font-size: 0.8rem;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 11rem;
  background-size: cover;
  border-radius: 0.3rem;
  background-position: center center;
  transition: 0.1s ease-in-out;
`;

const Rating = styled.span`
  bottom: 0.3rem;
  right: 0.3rem;
  position: absolute;
  opacity: 0;
  transition: 0.1s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-bottom: 0.3rem;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const Year = styled.span`
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
`;

export const Poster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false
}) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : NoImage
          }
        />
        <Rating>
          <span role="img" aria-label="rating" style={{ color: "goldenrod" }}>
            ★{" "}
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 10 ? `${title.substring(0, 10)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};
