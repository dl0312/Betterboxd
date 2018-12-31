import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const MovieDetailPresenter = ({ result, error, loading }) => null;

MovieDetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
