import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Section } from "Components/Section";
import { Loader } from "Components/Loader";
import { Poster } from "Components/Poster";
import { Message } from "Components/Message";

const Container = styled.div``;

export const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  error,
  loading
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length !== 0 && (
        <Section title="Popular">
          {popular.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.release_date && show.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length !== 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.release_date && show.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length !== 0 && (
        <Section title="Top Rated">
          {topRated.map(show => (
            <Poster
              key={show.id}
              title={show.name}
              id={show.id}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.release_date && show.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
