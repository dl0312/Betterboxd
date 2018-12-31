import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Section } from "Components/Section";
import { Loader } from "Components/Loader";
import { Poster } from "Components/Poster";
import { Message } from "Components/Message";

const Container = styled.div``;

export const HomePresenter = ({
  nowPlaying,
  popular,
  upcoming,
  error,
  loading
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length !== 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              title={movie.title}
              id={movie.id}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length !== 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              title={movie.title}
              id={movie.id}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length !== 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
            <Poster
              key={movie.id}
              title={movie.title}
              id={movie.id}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
