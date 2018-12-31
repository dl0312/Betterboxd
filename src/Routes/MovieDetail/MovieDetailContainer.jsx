import React from "react";
import { MovieDetailPresenter } from "./MovieDetailPresenter";
import { moviesApi } from "../../api";

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const {
        match: {
          params: { id }
        },
        history: { push }
      } = this.props;
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
      try {
        const { data: result } = await moviesApi.detail(parsedId);
        this.setState({ result, loading: true });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
      this.setState({ loading: true });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(this.state);
    const { result, error, loading } = this.state;
    return (
      <MovieDetailPresenter result={result} error={error} loading={loading} />
    );
  }
}
