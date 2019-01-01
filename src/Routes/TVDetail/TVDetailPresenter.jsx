import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Loader } from "Components/Loader";
import NoImage from "asset/popcorn.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 3rem;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1200px;
  height: 675px;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(
      to right,
      rgba(20, 20, 20, 1),
      transparent,
      rgba(20, 20, 20, 1)
    ),
    linear-gradient(to bottom, transparent, rgba(20, 20, 20, 1)),
    url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const ItemContainer = styled.div`
  margin: 1rem 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 0.6rem;
`;

const Overview = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

export const TVDetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>{result.name} | Betterboxd</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : NoImage
          }
        />
        <Data>
          <Title>{result.name}</Title>
          <ItemContainer>
            <Item>{result.first_air_date.substring(0, 4)}</Item>
            <Divider>•</Divider>
            <Item>{result.episode_run_time[0]} min</Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

TVDetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
