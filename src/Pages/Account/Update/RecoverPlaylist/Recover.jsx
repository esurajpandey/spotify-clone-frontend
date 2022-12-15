import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../../../utils/StateProvider";
import css from "./Recover.module.css";
import Row from "./Row";

function getDate(date) {
  const d = new Date(date);
  return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
}

function RecoverPlaylist() {
  const [playlist, setPlaylist] = useState([]);
  const [{ token }] = useStateProvider();
  useEffect(() => {
    fetch("http://localhost:3000/playlist/archived/lists/0", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPlaylist(data);
      });
  }, [token]);

  const restore = (id) => {
    fetch("http://localhost:3000/playlist/recover", {
      method: "PATCH",
      body: JSON.stringify({ playlistId: id }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(resp => {
        alert(resp.result)
        const newList = playlist.filter(p => p.playlistId !== id);
        setPlaylist(newList);
      });
  }


  return (
    <div className="info-body" style={{padding:"2.5rem 3rem", paddingRight:'4rem'}}>
      <h1 style={{fontSize:'2.8rem',fontFamily:'product-sans'}}>Recover playlists</h1>
      <p style={{marginTop:'2rem', fontFamily:'product-sans-regular',wordSpacing:'0.09rem',marginBottom:'1.6rem'}}>
        If you deleted a playlist within the last 90 days, you can get it back.
        Find the playlist you want to recover below and click Restore.
      </p>

      <table className="playlistRow">
        <thead>
          <tr className={css.heading} style={{fontFamily:'product-sans-regular',fontWeight:'300'}}>
            <th className={css.deleted} key="deleted">Deleted</th>
            <th className={css.title} key="title">Title</th>
            <th className={css.songs} key="songs">Songs</th>
            <th className={css.btn} key="btn">Restore</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((item) => {
            return (
              <Row
                id={item.playlistId}
                date={getDate(item.updatedAt)}
                songs={item.songs.length}
                title={item.title}
                restore={restore}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecoverPlaylist;