import React from "react";
import { TVPresenter } from "./TVPresenter";
import { tvApi } from "../../api";

export default class TVContainer extends React.Component {
  state = {
    airingToday: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      this.setState({ airingToday, popular, topRated, loading: true });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
