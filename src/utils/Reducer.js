import { reducerCases } from "./Constants";

export const initialState = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2ODgzODYzNH0.hYM0ZP_Ik2Xx1GAjCD12vhzrgCRzWjtzp1sLXzWWX58",
  playlists : [],
  user : null,
  selectedPlaylistId : "4d0zNXLqtpGEbEDjorMEjW",
  playlistData: null,
  currentlyPlaying : null,
  playerState : false,
  editPopup : false,
  isScroll :  false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS : {
      return {
        ...state,
        playlists : action.playlists
      }
    }

    case reducerCases.SET_USER : {
      return {
        ...state,
        user : action.user
      }
    }

    case reducerCases.SET_PLAYLIST : {
      return {
        ...state,
        playlistData : action.playlistData
      }
    }

    case reducerCases.SET_PLAYING : {
      return {
        ...state,
        currentlyPlaying :  action.currentlyPlaying
      }
    }

    case reducerCases.SET_PLAYER_STATE : {
      return {
        ...state,
        playerState :  action.playerState
      }
    }

    case reducerCases.SET_PLAYLIST_ID: {
      return {
        ...state,
        selectedPlaylistId :  action.selectedPlaylistId
      }
    }
    case reducerCases.SET_EDIT_PLAYLIST : {
      return {
        ...state,
        editPopup :  action.editPopup
      }
    }

    case reducerCases.SET_SCROLL : {
      return {
        ...state,
        isScroll :  action.isScroll
      }
    }
    default:
      return state;
  }
};

export default reducer;
