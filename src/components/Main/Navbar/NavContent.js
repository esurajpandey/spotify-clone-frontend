import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiHeartSquare } from "react-icons/bi";

export const topNavContent =  [
    {
        title : "Playlist",
        path : '/user/playlists',
        cName : 'playlist'
    },
    {
        title : "Podcasts",
        path : '/user/podcasts',
        cName : 'podcast'
    },
    {
        title : "Artists",
        path : '/user/artists',
        cName : 'artist'
    },
    {
        title : "Albums",
        path : '/user/albums',
        cName : 'album'
    }
];

export const sideNav = [
    {
        title : "Home",
        icons : <MdHomeFilled/>,
        cName : `active`,
        clName : 'home',
        path : '/'
    },
    {
        title : "Search",
        icons : <MdSearch/>,
        cName : `active`,
        clName : 'search',
        path:'/search'
    },
    {
        title : "Your Library",
        icons : <IoLibrary/>,
        cName : `active`,
        clName : 'library',
        path : '/user/playlists'
    },
    {
        title : "Create Playlist",
        icons : <AiFillPlusSquare/>,
        cName : `active`,
        clName : 'create_playlist',
        path : '/createPlaylist'
    },
    {
        title : "Liked Songs",
        icons : <BiHeartSquare/>,
        cName : `active`,
        clName : 'likedSong',
        path : '/likedSong',
    },
]