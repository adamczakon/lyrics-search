import {
  GET_TRACKS,
  GET_LYRICS,
  GET_TRACK_INFO,
  GET_FOUND_TRACKS,
  SEARCH_TRACKS
} from "./types";
import axios from "axios";

export const getTracks = () => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=25&country=pl&f_has_lyrics=1&apikey=f8184ef480e0052499d551d265115b00`
    )
    .then(res => {
      dispatch({ type: GET_TRACKS, payload: res.data.message.body.track_list });
    })
    .catch(err => console.log(err));
};

export const getLyrics = lyricsId => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${lyricsId}&apikey=f8184ef480e0052499d551d265115b00`
    )
    .then(res => {
      dispatch({ type: GET_LYRICS, payload: res.data.message.body.lyrics });
    })
    .catch(err => console.log(err));
};

export const getTrackInfo = lyricsId => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${lyricsId}
      &apikey=f8184ef480e0052499d551d265115b00`
    )
    .then(res => {
      dispatch({ type: GET_TRACK_INFO, payload: res.data.message.body.track });
    })
    .catch(err => console.log(err));
};

export const searchTracks = trackTitle => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=f8184ef480e0052499d551d265115b00`
    )
    .then(res => {
      dispatch({
        type: SEARCH_TRACKS,
        payload: res.data.message.body.track_list
      });
    });
};

export const getFoundTracks = () => {
  return {
    type: GET_FOUND_TRACKS
  };
};
