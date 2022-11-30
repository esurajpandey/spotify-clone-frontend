// import femalVersion from "../../../assets/femalVersion.jpg";
import jayhindSong from "../../../assets/Music/Jaihind Ki Senaa - Shershaah 320 Kbps.mp3";
import rate from "../../../assets/Music/Raataan Lambiyan - Shershaah 128 Kbps.mp3";
import ranjha from  "../../../assets/Music/Ranjha - Shershaah 128 Kbps.mp3";
import femaleVersion from "../../../assets/cover/femalVersion.jpg";
import fikernot from "../../../assets/cover/fikarnot.jpg";
import jayhindkisena from "../../../assets/cover/Jaihind.jpg";
import manbhariya from "../../../assets/cover/manbhariya.jpg";
import ranjhana from "../../../assets/cover/ranjhna.jpg";
export const recentContent = [
    {
        id:1,
        cName : 'recent-container',
        title : "My Playlist",
        type : 'Playlist',
        description : 'Love this and feel this',
        link : '/body',
    },
    {
        id:2,
        cName : 'recent-container',
        title : "Stark Playlist",
        link : '/body',
        type : 'Playlist',
        description : 'Love this and feel this',
        img : 'http://placehold.it/120x120&text=image1/'
    },
    {
        id:3,
        cName : 'recent-container',
        title : "Hollywood",
        link : '/body',
        type : 'Album',
        description : 'Love this and feel this',
        img : 'http://placehold.it/120x120&text=image1/'
    },
    {
        id:4,
        cName : 'recent-container',
        title : "Bollywood Butter",
        link : '/body',
        type : 'Playlist',
        description : 'Love this and feel this',
        img : 'http://placehold.it/120x120&text=image1/'
    },
    {
        id:5,
        cName : 'recent-container',
        title : "Trending Now",
        link : '/body',
        type : 'Album',
        description : 'Love this and feel this',
        img : 'http://placehold.it/120x120&text=image1/'
    }
];


export const songs = [
    {
        id: 1,
        title : "Ye Dil Mushkil Hai dil",
        album : "Keshariya",
        added : "2022-10-01",
        duration : 290000,
        artists:[ 'Arijit Sing','Raja Kumar'],
        loved : false,
        track: ranjha,
        cover: femaleVersion
    },
    {
        id: 2,
        title : "Rate labmiya",
        album : "Sersah",
        added : "2022-06-05",
        duration : 250000,
        artists:[ 'Arijit Sing','Raja Kumar'],
        loved : false,
        track: rate,
        cover: fikernot
    },
    {
        id: 3,
        title : "Hare Dil mera",
        album : "Keshariya",
        added : "2020-06-01",
        duration : 290000,
        artists:[ 'Arijit Sing','Raja Kumar'],
        loved : true,
        track: ranjha,
        cover: ranjhana
    },
    {
        id: 4,
        title : "Jay Hind Ki Sena",
        album : "Sersah",
        added : "2022-05-01",
        duration : 290000,
        artists:[ 'Arijit Sing','Raja Kumar'],
        loved : false,
        track: jayhindSong,
        cover: jayhindkisena
    },
    {
        id: 5,
        title : "Ye Dil Mushkil Hai dil",
        album : "Keshariya",
        added : "2022-06-01",
        duration : 230000,
        artists:[ 'Arijit Sing','Raja Kumar'],
        loved : true,
        track: rate,
        cover: manbhariya
    },
    {
        id: 6,
        title : "Hare Hare Dile Se Hare",
        album : "Keshariya",
        added : "2022-06-01",
        duration : 230000,
        artists:[ 'Arijit Sing','Raja Kumar'],
        loved : false,
        track: ranjha,
        cover: femaleVersion
    }
] ;

export const itemContent = [
    {
        id : 1,
        title : 'My Playlist is very good',
        description:"This is good playlist",
        img:'',
        type : 'private',
        likes : 555000,
        songs
    },
    {
        id : 3,
        title : 'Hollywood',
        description:"This is good playlist",
        img:'',
        type : 'private',
        likes : 555000,
        songs
    },
    {
        id : 2,
        title : 'Stark Playlist',
        description:"This is good playlist",
        img:'',
        type : 'private',
        likes : 10,
        songs 
    },
    {
        id : 4,
        title : 'Bollywood Butter',
        description:"This is good playlist",
        img:'',
        type : 'public',
        likes : 555000,
        songs
    },
    {
        id : 5,
        title : 'Trending Now',
        description:"This is good playlist",
        img:'',
        type : 'public',
        likes : 5556,
        songs
    }
]


export const cardsContent = [
    {
        id : 1,
        title : "More like hots hindi",
        cards : recentContent,
    },
    {
        id : 2,
        title : "Your top mixes",
        type : 'Album',
        description : 'Love this and feel this',
        cards : recentContent,
    },
    {
        id : 3,
        title : "Recently played",
        type : 'Playlist',
        description : 'Love this and feel this',
        cards : recentContent,
    },
    {
        id : 4,
        title : "Fresh Music",
        type : 'Playlist',
        description : 'Love this and feel this',
        cards : recentContent,
    },
    {
        id : 5,
        title : "Your Top mixes",
        type : 'Playlist',
        description : 'Love this and feel this',
        cards : recentContent,
    }
]

export const tagContent = [
    {
        id: 1,
        title : "Podcasts",
        image : "",
        items : cardsContent,
    },
    {
        id: 2,
        title : "Made For You",
        image : "",
        items : cardsContent,
    },
    {
        id: 3,
        title : "New releases",
        image : "",
        items : cardsContent,
    },
    {
        id: 4,
        title : "Hindi",
        image : "",
        items : cardsContent,
    },
    {
        id: 5,
        title : "Punjabi",
        image : "",
        items : cardsContent,
    },
    {
        id: 6,
        title : "Tamil",
        image : "",
        items : cardsContent,
    },
    {
        id: 7,
        title : "Telgu",
        image : "",
        items : cardsContent,
    },
    {
        id: 8,
        title : "Charts",
        image : "",
        items : cardsContent,
    },
    {
        id: 9,
        title : "Live Events",
        image : "",
        items : cardsContent,
    },
    {
        id: 10,
        title : "Pop",
        image : "",
        items : cardsContent,
    },
    {
        id: 11,
        title : "Indie",
        image : "",
        items : cardsContent,
    },
    {
        id: 12,
        title : "Trending",
        image : "",
        items : cardsContent,
    },
    {
        id: 13,
        title : "Romance",
        image : "",
        items : cardsContent,
    },
    {
        id: 14,
        title : "Discover",
        image : "",
        items : cardsContent,
    },
    {
        id: 15,
        title : "Mood",
        image : "",
        items : cardsContent,
    },
]

