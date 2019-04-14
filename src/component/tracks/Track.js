import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  const { track } = props;
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{track.track_name}</h5>
          <p className="card-text">
            <strong>Artist</strong>: {track.artist_name}
          </p>
          <p className="card-text">
            <strong>Album</strong>: {track.album_name}
          </p>
          <Link
            to={`lyrics/${track.track_id}`}
            className="btn btn-primary btn-block"
          >
            View lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
