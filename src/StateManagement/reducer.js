export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // REMOVE AFTER FINISHED DEVELOPING...
  // token:
  //   "BQB6g8fzwrjRGRYMdEirsMQMbICC4tjUGYzchy9oVHX9MtC2T4YDOLqLTWXCWiRK0zE9mqDXXKkPIg471jzZxsdeMJrGlbHQMvUOV05C-0dVqThnci10WFjFkUqINHgSux4G8T_39H00CCvrZvdnjPbdW67-Tf8XT1XL0Ve4ca4W29SI3-0ieMoDtJIepy8BFvSs77jFv-CKowSANZBMLnTUUZF79w",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
