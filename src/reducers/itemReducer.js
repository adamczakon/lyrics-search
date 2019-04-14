import {
  GET_TRACKS,
  GET_LYRICS,
  GET_TRACK_INFO,
  GET_FOUND_TRACKS,
  SEARCH_TRACKS
} from "../actions/types";

const initialState = {
  items: [],
  lyrics: {},
  tracksFound: [],
  trackInfo: {},
  header: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        items: action.payload,
        header: "25 most popular tracks in Poland"
      };
    case GET_LYRICS:
      return {
        ...state,
        lyrics: action.payload
      };
    case GET_TRACK_INFO:
      return {
        ...state,
        trackInfo: action.payload
      };
    case SEARCH_TRACKS:
      return {
        ...state,
        tracksFound: action.payload,
        header: "Search results"
      };
    case GET_FOUND_TRACKS:
      return {
        ...state
      };

    default:
      return state;
  }
}
