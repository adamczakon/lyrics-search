import React, { Component } from "react";
import Track from "./Track";
import Banner from "../layout/Banner";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { getTracks } from "../../actions/itemActions";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
    this.props.getTracks();
  }

  render() {
    const { header, items } = this.props.items;
    if (items.length === 0) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Banner />

          <div className="container">
            <h3 className="text-center mb-4">{header}</h3>
            <div className="row">
              {items.map(item => (
                <Track key={item.track.commontrack_id} track={item.track} />
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

Home.propTypes = {
  getTracks: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getTracks }
)(Home);
