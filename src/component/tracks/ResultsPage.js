import React, { Component } from "react";
import Track from "./Track";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { getFoundTracks } from "../../actions/itemActions";
import PropTypes from "prop-types";

class ResultsPage extends Component {
  componentDidMount() {
    this.props.getFoundTracks();
  }

  render() {
    const { tracksFound, header } = this.props.items;
    if (tracksFound.length === 0) {
      return <Spinner />;
    } else {
      return (
        <div className="container">
          {" "}
          <h3 className="text-center mb-4 mt-5">{header}</h3>
          <div className="row">
            {tracksFound.map(item => (
              <Track key={item.track.commontrack_id} track={item.track} />
            ))}
          </div>
        </div>
      );
    }
  }
}

ResultsPage.propTypes = {
  getFoundTracks: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getFoundTracks }
)(ResultsPage);
