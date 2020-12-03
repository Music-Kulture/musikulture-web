import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./../../services/api";
import "./profile.css";

const Profile = () => {
  const [token, setToken] = useState("");
  const [lang, setLang] = useState("");
  const [url, setUrl] = useState("");
  const [tracks, setTracks] = useState([{}]);

  useEffect(() => {
    const parametros = getHashParams();
    setToken(parametros.access_token);
  }, []);

  useEffect(() => {
    const redirectURL = `/tracks/#token=${token}&lang=${lang}`;
    setUrl(redirectURL);
  }, [lang])

  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  function handleSelectChange(event) {
    setLang(event.target.value);
  }

  return (
    <>
      <div className="background">
      <p>{lang}</p>
    
      <select onChange={handleSelectChange} className="select form-control-lg">
        <option value="">Linguagens disponíveis</option>
        <option value="pt">Português</option>
        <option value="en">Inglês</option>
      </select>

      
      <a href={url} class="btn1 btn-info btn-lg" type="button">Músicas que você curtiu</a>

      <a href="#" class="btn2 btn-info btn-lg" type="button">Novas músicas</a>


      {/* {tracks.map((item) => {
        return (
          <p>
            {item.trackName} - {item.principalArtist}
          </p>
        );
      })} */}
      </div>
    </>
  );
};

export default Profile;
