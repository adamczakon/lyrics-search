import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { getLyrics, getTrackInfo } from "../../actions/itemActions";
import PropTypes from "prop-types";

class LyricsPage extends Component {
  componentDidMount() {
    this.props.getLyrics(this.props.match.params.id);
    this.props.getTrackInfo(this.props.match.params.id);
  }

  render() {
    if (
      this.props.items.lyrics === undefined ||
      Object.keys(this.props.items.lyrics).length === 0 ||
      Object.keys(this.props.items.trackInfo).length === 0
    ) {
      return <Spinner />;
    } else {
      const { lyrics, trackInfo } = this.props.items;
      return (
        <div className="container mt-5">
          <div className="card">
            <div className="card-header">
              <h5>
                {" "}
                <span className="text-primary">
                  {trackInfo.track_name}
                </span>{" "}
                <span className="text-secondary"> by</span>{" "}
                <span className="text-primary">{trackInfo.artist_name}</span>
              </h5>
            </div>
            <div className="card-body">{lyrics.lyrics_body}</div>
          </div>
        </div>
      );
    }
  }
}

LyricsPage.propTypes = {
  getLyrics: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getLyrics, getTrackInfo }
)(LyricsPage);
