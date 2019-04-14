import React, { Component } from "react";
import { searchTracks } from "../../actions/itemActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchTracks(this.state.title);
    this.props.history.push(`/${this.state.title}`);
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <form
        className="d-flex justify-content-center mr-auto"
        onSubmit={this.onSubmit}
      >
        {" "}
        <input
          type="text"
          placeholder="Title, artist, album..."
          className="form-control form-control-md"
          onChange={this.onChange}
          style={{ width: "90%" }}
        />
        <button className="btn btn-secondary" type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  searchTracks: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default withRouter(
  connect(
    mapStateToProps,
    { searchTracks }
  )(Search)
);
