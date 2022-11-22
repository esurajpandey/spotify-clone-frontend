import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../../../utils/StateProvider";
import SearchInput from "./SearchInput";
import { topNavContent } from "./NavContent";
import { Link, useLocation } from "react-router-dom";
export default function TopNav({ navBg }) {
  const [{ user }] = useStateProvider();
  const loc = {
    inLibrary: false,
    inSearch: false,
    inHome: false,
    libray: {
      inPlaylist: false,
      inPodcast: false,
      inAlbum: false,
      inArtist: false,
    },
  };
  const location = useLocation();

  switch (location.pathname) {
    case "/":
      loc.inHome = true;
      break;
    case "/user/playlists":
      loc.inLibrary = true;
      loc.libray = true;
      break;
    case "/user/podcasts":
      loc.inLibrary = true;
      loc.libray = true;
      break;
    case "/user/albums":
      loc.inLibrary = true;
      break;
    case "/user/artists":
      loc.inLibrary = true;
      loc.libray = true;
      break;
    case "/search":
      loc.inSearch = true;
      break;
    default:
      loc.inHome = true;
  }

  console.log('In Top',location);
  console.log(loc);
  return (
    <Container navBg={navBg}>
      <div className="topnav_head">
        <button>
          <span>{`<`}</span>
        </button>
        <button>
          <span>{`>`}</span>
        </button>
        {loc.inSearch && <SearchInput />}
        {loc.inLibrary && (
          <ul className="library_nav">
            {topNavContent.map((item) => {
              return (
                <li key={item.title} className={`${item.cName} ${location.pathname === item.path&& 'active'}`}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="nav-btn">
        {loc.inHome && (
          <div className="upgrade">
            <a href="/premium">
              <span>Upgrade</span>
            </a>
          </div>
        )}

        <div className="avatar">
          <a href="#.">
            <CgProfile />
            <span>{user?.name ?? "Suraj Pandey"}</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 15vh;
  position: sticky; //after scroll it has to stick at top: ;
  z-index: 1;
  top: 0;
  background-color: #282828;
  transition: 0.3s ease-in-out;
  height: 4rem;
  background-color: ${({ navBg }) => (navBg ? "black" : "none")};

  .topnav_head {
    display: flex;
    gap: 2rem;
    width: 45%;
    button {
      font-size: 2rem;
      color: white;
      border: none;
      padding-left: 0.3rem;
      padding-top: 1px;
      padding-bottom: 1px;
      padding-right: 0.4rem;
      border-radius: 1rem;
      background-color: #393939;
      span {
        font-weight: 50;
      }
    }
    .active {
      background-color: #393939;
    }
    .library_nav {
      display: flex;
      list-style-type: none;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      li {
        display: flex;
        padding-left: 0.9rem;
        padding-right: 0.9rem;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;

        border-radius: 0.3rem;
        a {
          text-decoration: none;
          span {
            color: white;
            font-size: 0.875rem;
            font-weight: 700;
          }
        }
      }
    }
  }
  .nav-btn {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    .avatar {
      background-color: black;
      padding: 0.3rem 0.4rem;
      padding-right: 1rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: white;
        font-weight: 700;

        svg {
          font-size: 1.3rem;
          background-color: #282828;
          padding: 0.2rem;
          border-radius: 1rem;
          color: #c7c5c5;
        }
      }
      &:hover {
        background-color: grey;
      }
    }
    .upgrade {
      align-items: center;
      justify-content: center;
      border-radius: 2rem;
      border: 1px solid wheat;
      padding: 0.35rem 0.8rem;
      transition: width 3s, height 3s;
      a {
        text-align: center;
        text-decoration: none;
        color: white;
        font-size: 0.875rem;
        font-weight: 700;
      }
      &:hover {
        background-color: black;
        padding: 0.42rem 0.89rem;
      }
    }
  }
`;
