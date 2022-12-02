import { reducerCases } from "./Constants";

export const initialState = {
  isScroll :  false,
  isPlaying : false,
  token: null,
  userPlaylists : [],
  currentPlaylist : {},
  user : null,
  editPopup : false,
  currentSong : null,
  previousSong :  null,
  volume:10
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_USER_PLAYLISTS : {
      return {
        ...state,
        userPlaylists : action.userPlaylists
      }
    }

    case reducerCases.SET_CURRENT_PLAYLIST: {
      return {
        ...state,
        currentPlaylist : action.currentPlaylist
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
        isPlaying : action.isPlaying
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

    case reducerCases.SET_EDIT_POP_UP :{
      return {
        ...state,
        editPopup : action.editPopup
      }
    }
    case reducerCases.SET_SCROLL : {
      return {
        ...state,
        isScroll :  action.isScroll
      }
    }

    case reducerCases.SET_CURRENT_SONG : {
      return {
        ...state,
        currentSong : action.currentSong
      }
    }
    case reducerCases.SET_PREVIOUS_SONG : {
      return {
        ...state,
        previousSong : action.previousSong
      }
    }

    case reducerCases.SET_VOLUME : {
      return{
        ...state,
        volume : action.volume
      }
    }

    default:
      return state;
  }
};

export default reducer;
