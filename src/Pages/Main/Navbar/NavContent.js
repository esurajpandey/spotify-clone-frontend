import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiHeartSquare } from "react-icons/bi";

export const topNavContent =  [
    {
        title : "Playlist",
        path : '/spotify/playlists',
        cName : 'playlist'
    },
    {
        title : "Podcasts",
        path : '/spotify/podcasts',
        cName : 'podcast'
    },
    {
        title : "Artists",
        path : '/spotify/artists',
        cName : 'artist'
    },
    {
        title : "Albums",
        path : '/spotify/albums',
        cName : 'album'
    }
];

export const sideNav = [
    {
        title : "Home",
        icons : <MdHomeFilled/>,
        cName : `active`,
        clName : 'home',
        path : '/spotify/'
    },
    {
        title : "Search",
        icons : <MdSearch/>,
        cName : `active`,
        clName : 'search',
        path:'/spotify/search'
    },
    {
        title : "Your Library",
        icons : <IoLibrary/>,
        cName : `active`,
        clName : 'library', 
        path : '/spotify/playlists'
    },
    {
        title : "Create Playlist",
        icons : <AiFillPlusSquare/>,
        cName : `active`,
        clName : 'create_playlist',
        path : '/spotify/createPlaylist'
    },
    {
        title : "Liked Songs",
        icons : <BiHeartSquare/>,
        cName : `active`,
        clName : 'likedSong',
        path : '/spotify/likedSong',
    },
]


export const dropMenu =  [
    {
        name: "Account",
        path: '/',
        cName: 'account menu_item'
    },
    {
        name: "Profile",
        path: '/spotify/profile',
        cName: 'profile menu_item'
    },
    {
        name: "Upgrade to premium",
        path: '/',
        cName: 'upgrade_to menu_item'
    },
    {
        name: "Support",
        path: '/',
        cName: 'support menu_item'
    },
    {
        name: "Download",
        path: '/',
        cName: 'download menu_item'
    },
    {
        name: "Setting",
        path: '/',
        cName: 'setting menu_item'
    },
    {
        name: "Log out",
        path: '/',
        cName: 'logout menu_item'
    },


]