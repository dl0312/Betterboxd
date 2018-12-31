import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const TVDetailPresenter = ({ result, error, loading }) => null;

TVDetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
